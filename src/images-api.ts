import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

type Image = {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
};

type ApiResponse = {
  total_pages: number;
  results: Image[];
};

export const getImages = async (
  item: string,
  currentPage: number,
  setTotalPage: (total: number) => void
): Promise<Image[]> => {
  const res = await axios.get<ApiResponse>("/search/photos", {
    params: {
      query: item,
      page: currentPage,
      per_page: 12,
      orientation: "landscape",
      client_id: "Dgc0OiGK4Kz4I4JxZIuoUDWBylO0MTHCrc2qgApcj5o",
    },
  });

  setTotalPage(res.data.total_pages);
  return res.data.results;
};
