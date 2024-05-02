import { ChangeEvent } from "react";
interface SearchBarProps {
  onSearch: (key: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const keyword = event.target.value;
    onSearch(keyword);
  };

  return (
    <>
      {" "}
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          onChange={handleChange}
          className="searchTerm"
        />
        <button type="submit" className="searchButton">
          search
        </button>
      </div>
    </>
  );
};

export default SearchBar;
