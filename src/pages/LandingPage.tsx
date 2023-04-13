import SearchBar from "../components/Search/SearchBar";

const LandingPage = () => {
    return (
        <div className="container mx-auto py-10 h-64 px-6 space-y-12 my-40">
            <div className="text-center">
                <h1 className="text-[5rem] font-bold text-[color:#15233a] leading-none">BOOKS</h1>
                <p className="text-[color:#15233a] tracking-[.35em] font-medium">PENGUIN RANDOM HOUSE</p>
            </div>
            <SearchBar />
        </div>
    );
}

export default LandingPage;
