import { useState, useRef, useEffect } from "react";
import { Option } from "../../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

interface SelectProps {
    defaultOption?: string;
    options: Option[];
    selected: Option | null;
    onChange: (selection: Option) => void;
}

const Select = ({ defaultOption, options, selected, onChange }: SelectProps) => {
    
    const ref = useRef<HTMLDivElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleClickOutside = (e: Event) => {
        if(ref.current && !ref.current.contains(e.target as HTMLDivElement)) {
            setIsOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        }
    }, [ref]);

    // isopen sa down icon degilse up icon
    return (
        <div className="flex flex-col w-1/3 select" ref={ref}>
                <div className="w-full rounded-md bg-white px-3 py-2 text-sm text-gray-900 cursor-pointer flex justify-between"
                    onClick={(e) => setIsOpen(!isOpen)}>{selected?.value ? selected.value : defaultOption} <FontAwesomeIcon icon={faSortDown} className="ml-2 align-top" style={{ color: '#6f6f6f' }} /></div>
            {isOpen &&
                <div className="w-full rounded-md bg-white shadow-lg focus:outline-none options">
                    {
                        options.map(option => (
                            <div onClick={() => {
                                onChange(option);
                                setIsOpen(false);
                            }} key={option.key} className="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-[color:#e0e0e0]">{option.value}</div>
                        ))
                    }
                </div>
            }
        </div>
    );
};

export default Select;
