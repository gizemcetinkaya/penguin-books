import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchBar = () => {

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const searchText = searchParams.get("q");
    const searchType = searchParams.get("type");

    const [searchValue, setSearchValue] = useState<string>(searchText || "");
    const [selectValue, setSelectValue] = useState<string>(searchType || "");

    const selectText = searchText || searchType ? "Smart search" : "our Smart Search algorithm";


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (searchValue || selectValue) {
            navigate(`/search?q=${searchValue}&type=${selectValue}`);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3 w-1/2 mx-auto space-y-6 flex flex-col form-wrapper">
                <div className="relative flex items-center w-full h-12 rounded-md focus-within:shadow-lg overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] input-wrapper">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="hidden search-icon" />
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
                        onClick={handleSubmit}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3" onClick={(e) => setSearchValue('')}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <div className="mx-auto select-wrapper">
                    <label htmlFor="" className="text-[color:#818181] mr-5">Search for a book by:</label>
                    <select onChange={(e) => setSelectValue(e.target.value)} value={selectValue} className="outline-none text-sm">
                        <option value="">{selectText}</option>
                        <option value="title">Title</option>
                        <option value="author">Author</option>
                        <option value="isbn">ISBN</option>
                    </select>
                </div>
            </div>
        </form>
    );
}

export default SearchBar;