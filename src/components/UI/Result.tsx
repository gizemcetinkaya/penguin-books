import { Result as ResultTypes } from "../../types/types";
import Card from "./Card";
import Loading from "./Loading";
import NotFound from "./NotFound";

interface ResultProps {
    results: ResultTypes[],
    title: string;
    status: string;
}

const Result = ({ results, title, status }: ResultProps) => {
    return (
        <div className="search-results">
            <h3 className="text-sm font-medium mb-4">{title} ({results?.length ?? 0})</h3>
            {
                status === 'loading' ? <Loading /> : results.length === 0 ? <NotFound message="There is no exact matched result" /> : results.map(item => (
                    <Card key={item.id} item={item} />
                ))
            }
        </div>
    );
}

export default Result;
