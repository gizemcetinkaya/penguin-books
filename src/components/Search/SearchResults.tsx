import { ErrorResponseDto, SearchResult } from "../../types/types";
import CardList from "../UI/CardList";

interface SearchResultProps {
    searchResults: SearchResult;
    status: string;
    error?: ErrorResponseDto;
}

const SearchResults = ({ searchResults, status, error }: SearchResultProps) => {

    return (
        <div className="p-4 rounded-lg mt-14">
            <CardList status={status} error={error} results={searchResults?.topResults} title="Top results" />
            <CardList status={status} error={error} results={searchResults?.relatedResults} title="Related" />
        </div>
    );
}

export default SearchResults;
