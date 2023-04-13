import Card from "../UI/Card";

const SearchResults = () => {
    return (
        <>
            <div className="p-4 rounded-lg mt-14">
                <div className="top-results">
                    <h3 className="text-sm font-medium mb-4">Top results (3)</h3>
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="related mt-8">
                    <h3 className="text-sm font-medium mb-4">Related</h3>
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    );
}

export default SearchResults;
