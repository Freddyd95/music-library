import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

function SearchBar() {
    const { term, handleSearch } = useContext(SearchContext)

    return (
        <form>
            <input ref={term} type="text" placeholder="Enter a search term here" />
            <button onClick={(e) => handleSearch(e, term.current.value)}>Submit</button>
        </form>
    );
}

export default SearchBar;