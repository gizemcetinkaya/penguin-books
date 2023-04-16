import { useQuery } from "@tanstack/react-query";
import fetchSearchData from "../api/search";
import { SearchTerm } from "../../types/types";

const useSearchData = (searchTerm: SearchTerm) => {
    return useQuery({
        queryKey: ["searchData", searchTerm],
        queryFn: () => fetchSearchData(searchTerm)
    });
};

export default useSearchData;