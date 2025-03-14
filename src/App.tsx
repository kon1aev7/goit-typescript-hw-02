import { useEffect, useState } from "react";
import { getImages } from "./images-api";
import { Image } from "./App.types";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import scrollOnLoad from "./components/Scroll/Scroll";

export default function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [totalPage, setTotalPage] = useState<number>(0);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setIsError("");
      return;
    }

    async function fetchDataImages() {
      try {
        setIsLoading(true);
        setIsError(null);
        const data = await getImages(searchQuery, page, setTotalPage);
        if (data && Array.isArray(data)) {
          setImages((prevImages) => [...prevImages, ...data]);
        }
        if (page !== 1) {
          scrollOnLoad();
        }
      } catch (error) {
        setIsError((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDataImages();
  }, [searchQuery, page]);

  const handleSearch = (item: string) => {
    setSearchQuery(item);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (item: Image) => {
    setSelectedImage(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {isError && <ErrorMessage message={isError} />}
      {isLoading && <Loader />}
      {images.length > 0 && <ImageGallery onClick={openModal} items={images} />}
      {selectedImage && (
        <ImageModal item={selectedImage} onClose={closeModal} isOpen={modalIsOpen} />
      )}
      {images.length > 0 && !isLoading && page < totalPage && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </div>
  );
}
