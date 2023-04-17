import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

interface InputProps {
    type: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string;
}

const Input = ({ type, placeholder, onChange, value }: InputProps) => {
    return (
        <>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="hidden search-icon"
                />
            </div>
            <input
                type={type}
                className="h-full w-full outline-none text-sm text-gray-700 p-4"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </>
    );
};

export default Input;