import { ErrorResponseDto, Result as ResultTypes } from "../../types/types";
import Card from "./Card";
import Loading from "./Loading";
import NotFound from "./NotFound";

interface ResultProps {
    results: ResultTypes[],
    title: string;
    status: string;
    error: ErrorResponseDto;
    isError: boolean;
}

const Result = ({ results, title, status, error, isError }: ResultProps) => {
    return (
        <div className="search-results">
            <h3 className="text-sm font-medium mb-4">{title} ({results?.length ?? 0})</h3>
            {
                status === 'loading' ? <Loading /> : 
                isError ? <NotFound message={error.response.data.message} /> :
                results.length === 0 ? <NotFound message="There is no exact matched result" /> : 
                results.map(item => (
                    <Card key={item.id} item={item} />
                ))
            }
        </div>
    );
}

export default Result;
