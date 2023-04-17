import SearchBar from "../components/Search/SearchBar";

const LandingPage = () => {
    return (
        <div className="container mx-auto py-10 h-64 px-6 space-y-12 my-40">
            <div className="text-center">
                <h1 className="md:text-[5rem] font-bold text-[color:#15233a] leading-none xs:text-[2rem]">BOOKS</h1>
                <p className="text-[color:#15233a] md:tracking-[.35em] font-medium xs:tracking-[.0em] xs:mt-2">PENGUIN RANDOM HOUSE</p>
            </div>
            <SearchBar />
        </div>
    );
}

export default LandingPage;
