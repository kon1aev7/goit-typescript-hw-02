import React from "react";
import toast from "react-hot-toast";
import { FcSearch } from "react-icons/fc";
import s from "./SearchBar.module.css";


interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem("text") as HTMLInputElement;

    if (!input.value.trim()) {
      toast.error("Complete the search form, please!");
      return;
    }

    onSearch(input.value.trim());
    form.reset();
  };

  return (
    <header className={s.header}>
      <form className={s.wrapper} onSubmit={handleSubmit}>
        <button className={s.btn} type="submit">
          <FcSearch className={s.icon} />
        </button>
        <input
          className={s.input}
          type="text"
          name="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default SearchBar;
