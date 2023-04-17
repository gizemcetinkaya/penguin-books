import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";
import SearchResults from "../components/Search/SearchResults";
import useSearchData from "../service/queries/useSearch";

const Search = () => {

    const [params] = useSearchParams();

    const searchText: string = params.get("q")!;
    const searchType: string = params.get("type")!;

    const { status, error, isError, data } = useSearchData({searchText, searchType});

    return (
        <>
            <Navbar />
            <div className="container mx-auto p-4 xs:p-0 sm:p-0 md:p-4">
                <SearchResults searchResults={data!} status={status} error={error!} isError={isError} />
            </div>
        </>
    );
}

export default Search;
