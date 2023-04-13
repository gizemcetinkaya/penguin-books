import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {

    return (
        <form>
            <div className="mb-3 w-1/2 mx-auto space-y-6 flex flex-col">
                <div className="relative flex items-center w-full h-12 rounded-md focus-within:shadow-lg overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] order-1">
                    <input
                        type="text"
                        className="h-full w-full outline-none text-sm text-gray-700 p-4"
                        placeholder="Search for book title, author or ISBN"
                    />
                    <button
                        className="relative z-[2] flex items-center rounded-r 
                        bg-[color:#e16829] px-6 py-2.5 font-medium uppercase leading-tight text-[color:white] shadow-md h-full"
                        type="button">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className="order-2 mx-auto">
                    <label htmlFor="" className="text-[color:#818181] mr-5">Search for a book by:</label>
                    <select>
                        <option value="">our Smart Search algorithm</option>
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
