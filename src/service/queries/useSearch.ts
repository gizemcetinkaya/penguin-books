import { useQuery } from "@tanstack/react-query";
import fetchSearchData from "../api/search";
import { ErrorResponseDto, SearchTerm } from "../../types/types";

const useSearchData = (searchTerm: SearchTerm) => {
    return useQuery({
        queryKey: ["searchData", searchTerm],
        queryFn: () => fetchSearchData(searchTerm),
        onError: (error: ErrorResponseDto) => error.response.data.message,
        retry: 1,
        refetchOnWindowFocus: false
    });
};

export default useSearchData;