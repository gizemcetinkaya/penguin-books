import { BookFormat, ResponseDto, SearchResult, SearchTerm } from "../../types/types";
import { http } from "../../libs/http";

function generateRandomPrice(maxPrice: number): number {
    const minPrice = 0.01; // Minimum price is $0.01
    const decimalPlaces = 2; // We'll generate prices with two decimal places
    const rand = Math.random() * (maxPrice - minPrice) + minPrice;
    const power = Math.pow(10, decimalPlaces);
    const rounded = Math.round(rand * power);
    return rounded / power;
}

function generateRandomBookFormat(): BookFormat {
    const formats = Object.values(BookFormat);
    const randomIndex = Math.floor(Math.random() * formats.length);
    return formats[randomIndex];
  }


const fetchSearchData = async (searchTerm: SearchTerm) => {
    
    const docTypeMap = new Map<string, string>([
        ["title", "&docType=work"],
        ["author", "&docType=author"],
        ["isbn", "&docType=isbn"],
      ]);
      
    const docType = docTypeMap.get(searchTerm.searchType) ?? "";

    const queryString = `?q=${searchTerm.searchText}${docType}`;
    const response = await http.get<ResponseDto>(queryString);

    const responseData = response.data.data.results.map(item => {
        return {
            ...item,
            price: generateRandomPrice(50),
            format: generateRandomBookFormat()
        }
    });

    const searchText = searchTerm.searchText.toLowerCase();

    const searchResult: SearchResult = {
        topResults : responseData.filter(item => item.name.toLowerCase() === searchText),
        relatedResults: responseData.filter(item => item.name.toLowerCase() !== searchText)
    };
    return searchResult;
}

export default fetchSearchData;