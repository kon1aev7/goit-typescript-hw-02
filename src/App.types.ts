export type Image = {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular?: string;
  };
  user?: {
    name: string;
  };
};

export type AppState = {
  images: Image[];
  isLoading: boolean;
  isError: string | null;
  page: number;
  searchQuery: string;
  modalIsOpen: boolean;
  selectedImage: Image | null;
  totalPage: number;
};

export type SearchBarProps = {
  onSearch: (item: string) => void;
};

export type ImageGalleryProps = {
  items: Image[];
  onClick: (item: Image) => void;
};

export type ImageModalProps = {
  item: Image | null;
}
