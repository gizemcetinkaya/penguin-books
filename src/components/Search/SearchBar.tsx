import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Select from "../UI/Select";
import { Option } from "../../types/types";

const options: Option[] = [
    {
        key: "title",
        value: "Title"
    },
    {
        key: "author",
        value: "Author"
    },
    {
        key: "isbn",
        value: "Isbn"
    }
]

const SearchBar = () => {
    const navigate = useNavigate();

    const location = useLocation();

    const [searchParams] = useSearchParams();

    const searchText = searchParams.get("q") || "";
    const searchType = searchParams.get("type") || "";


    const defaultOption = searchText || searchType ? "Smart search" : "our Smart Search algorithm";

    const [searchValue, setSearchValue] = useState<string>(searchText);
    const [selectedOption, setSelectedOption] = useState<Option>({ key: searchType, value: searchType });

    const navigateSearch = () => {
        const q = searchValue && `q=${searchValue.trim()}`;
        const type = selectedOption.value && `&type=${selectedOption.key}`;
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
            <div className="mb-3 xl:w-1/2 lg:w-full mx-auto space-y-6 flex flex-col form-wrapper xs:w-full sm:w-full md:w-full">
                <div className="relative flex items-center w-full h-12 rounded-md focus-within:shadow-lg overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] input-wrapper">
                    <Input type="text" placeholder="Search for book title, author or ISBN" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                    <Button
                        className="relative z-[2] flex items-center rounded-r bg-[color:#e16829] px-6 py-2.5 font-medium uppercase leading-tight text-[color:white] shadow-md h-full search-button"
                        type="button"
                        onClick={handleSubmit}
                        disabled={!searchValue}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Button>
                    <Button
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                        type="button"
                        onClick={(e) => setSearchValue("")}>
                        <FontAwesomeIcon icon={faXmark} />
                    </Button>
                </div>
                <div className="select-wrapper flex justify-center xs:flex-col sm:flex-row md:flex-row">
                    <div className="2xl:w-1/4 xl:w-full lg:w-full md:w-full px-3 py-2 label xs:w-full sm:w-full">
                        <label htmlFor="" className="text-[color:#818181]">
                            Search for a book by:
                        </label>
                    </div>
                    <Select defaultOption={defaultOption} options={options} selected={selectedOption} onChange={(selection: Option) => setSelectedOption(selection)} />
                </div>
            </div>
        </form>
    );
};

export default SearchBar;
