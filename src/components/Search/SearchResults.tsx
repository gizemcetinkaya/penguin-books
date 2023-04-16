import { SearchResult } from "../../types/types";

import Result from "../UI/Result";

interface SearchResultProps {
    searchResults: SearchResult,
    status: string
}

const SearchResults = ({ searchResults, status }: SearchResultProps) => {

    return (
        <div className="p-4 rounded-lg mt-14">
            <Result status={status} results={searchResults && searchResults.topResults} title="Top results" />
            <Result status={status} results={searchResults && searchResults.relatedResults} title="Related" />
        </div>
    );
}

export default SearchResults;
