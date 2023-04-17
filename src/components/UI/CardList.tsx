import { ErrorResponseDto, Result } from "../../types/types";
import Card from "./Card";
import Loading from "./Loading";
import NotFound from "./NotFound";

interface CardListProps {
    results: Result[];
    title: string;
    status: string;
    error?: ErrorResponseDto;
}

const CardList = ({
    results,
    title,
    status,
    error,
}: CardListProps) => {
    const hasResults = results?.length > 0;
    const isLoading = status === "loading";
    const hasError = Boolean(error);

    return (
        <div className="search-results">
            <h3 className="text-sm font-medium mb-4">
                {title} ({results?.length})
            </h3>

            {isLoading && <Loading />}

            {!isLoading && !hasResults && (
                <NotFound message="There is no exact matched result" />
            )}

            {!isLoading && hasError && (
                <NotFound message={error?.response?.data?.message ?? "Error"} />
            )}

            {!isLoading && hasResults && (
                <>
                    {results.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </>
            )}
        </div>
    );
};

export default CardList;
