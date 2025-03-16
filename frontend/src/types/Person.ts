export interface Person {
  id?: number;
  name: string;
  title: string;
  company: string;
  phone: string;
  dob: string;
  embedding?: number[];
}

export interface VectorSearchResponse {
  id: number;
  name: string;
  title: string;
  company: string;
  score: number;
}

export interface VectorSearchRequest {
  query: string;
  k?: number;
}
