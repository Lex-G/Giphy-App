import { FormEvent, useState } from "react";
import "./SearchForm.css";

interface Props {
  setSearch: (search: string) => void;
}

const SearchForm = ({ setSearch }: Props) => {
  const [searchInput, setSearchInput] = useState("");
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    setSearch(searchInput);
  };

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <label htmlFor="search">Search Giphs</label>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

export default SearchForm;
