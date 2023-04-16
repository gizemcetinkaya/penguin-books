export interface ResponseDto {
  data: Data
}

export interface Data {
  results: Result[]
}

export interface Result {
  docType: string
  id: string
  key: number
  name: string
  imageUrl: string
  mostRecentFormat?: MostRecentFormat
  genre?: string
  authors: Author[]
  price: number
  format: BookFormat
}

export interface MostRecentFormat {
  name: string
  isbn: number
}

export interface Author {
  id: number
  name: string
}

export interface SearchResult {
  topResults: Result[],
  relatedResults: Result[]
}


export interface SearchTerm {
  searchText: string;
  searchType: string;
}

export enum BookFormat {
  Paperback = "Paperback",
  Ebook = "E-book",
  Audiobook = "Audiobook",
}