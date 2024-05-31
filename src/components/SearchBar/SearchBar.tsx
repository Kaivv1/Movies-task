import { Search } from "lucide-react";
import "./_search-bar.scss";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" />
      <button>
        <Search className="search-icon" size="1.1rem" />
      </button>
    </div>
  );
};

export default SearchBar;
