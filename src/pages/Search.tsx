import Navbar from "../components/Layout/Navbar";
import SearchResults from "../components/Search/SearchResults";

const Search = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto p-4 h-screen">
                <SearchResults />
            </div>
        </>
    );
}

export default Search;
