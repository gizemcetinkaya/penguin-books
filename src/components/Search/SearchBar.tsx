import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const SearchBar = () => {
    const navigate = useNavigate();

    const location = useLocation();

    const [searchParams] = useSearchParams();

    const [searchValue, setSearchValue] = useState<string>(searchParams.get("q") || "");
    const [selectedOption, setSelectedOption] = useState<string>(searchParams.get("type") || "");

    const defaultOption = searchValue || selectedOption ? "Smart search" : "our Smart Search algorithm";

    const navigateSearch = () => {
        const q = searchValue && `q=${searchValue.trim()}`;
        const type = selectedOption && `&type=${selectedOption}`;
        navigate(`/search?${q}${type}`);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchValue) {
            navigateSearch();
        }
    };

    useEffect(() => {
        if (location.pathname === "/search" && selectedOption) {
            navigateSearch();
        }
    }, [selectedOption]);

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3 w-1/2 mx-auto space-y-6 flex flex-col form-wrapper">
                <div className="relative flex items-center w-full h-12 rounded-md focus-within:shadow-lg overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] input-wrapper">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className="hidden search-icon"
                        />
                    </div>
                    <input
                        type="text"
                        className="h-full w-full outline-none text-sm text-gray-700 p-4"
                        placeholder="Search for book title, author or ISBN"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <button
                        className="relative z-[2] flex items-center rounded-r 
                        bg-[color:#e16829] px-6 py-2.5 font-medium uppercase leading-tight text-[color:white] shadow-md h-full search-button"
                        type="button"
                        onClick={handleSubmit}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                        onClick={(e) => setSearchValue("")}
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <div className="mx-auto select-wrapper">
                    <label htmlFor="" className="text-[color:#818181] mr-5">
                        Search for a book by:
                    </label>
                    <select
                        onChange={(e) => setSelectedOption(e.target.value)}
                        value={selectedOption}
                        className="outline-none text-sm"
                    >
                        <option value="">{defaultOption}</option>
                        <option value="title">Title</option>
                        <option value="author">Author</option>
                        <option value="isbn">ISBN</option>
                    </select>
                </div>
            </div>
        </form>
    );
};

export default SearchBar;
