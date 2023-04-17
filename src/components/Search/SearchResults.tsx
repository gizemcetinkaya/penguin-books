import { ErrorResponseDto, SearchResult } from "../../types/types";

import Result from "../UI/Result";

interface SearchResultProps {
    searchResults: SearchResult;
    status: string;
    error: ErrorResponseDto;
    isError: boolean;
}

const SearchResults = ({ searchResults, status, error, isError }: SearchResultProps) => {

    return (
        <div className="p-4 rounded-lg mt-14">
            <Result status={status} error={error} isError={isError} results={searchResults && searchResults.topResults} title="Top results" />
            <Result status={status} error={error} isError={isError} results={searchResults && searchResults.relatedResults} title="Related" />
        </div>
    );
}

export default SearchResults;
