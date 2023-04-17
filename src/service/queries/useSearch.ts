import { useQuery } from "@tanstack/react-query";
import fetchSearchData from "../api/search";
import { ErrorResponseDto, SearchTerm } from "../../types/types";
import { AxiosError } from "axios";

const useSearchData = (searchTerm: SearchTerm) => {
    return useQuery({
        queryKey: ["searchData", searchTerm],
        queryFn: () => fetchSearchData(searchTerm),
        onError: (error: ErrorResponseDto) => error.response.data.message
    });
};

export default useSearchData;