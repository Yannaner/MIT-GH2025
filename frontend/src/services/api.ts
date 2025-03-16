import axios from 'axios';
import { Person, VectorSearchRequest, VectorSearchResponse } from '../types/Person';

const API_BASE_URL = 'http://localhost:52773/crud';

export const api = {
  getAllPersons: () => 
    axios.get<Person[]>(`${API_BASE_URL}/persons/all`),
    
  searchPersons: (request: VectorSearchRequest) =>
    axios.post<VectorSearchResponse[]>(`${API_BASE_URL}/persons/search/vector`, request),
    
  createPerson: (person: Person) =>
    axios.post<Person>(`${API_BASE_URL}/persons`, person),
    
  updatePerson: (id: number, person: Person) =>
    axios.put<Person>(`${API_BASE_URL}/persons/${id}`, person),
    
  deletePerson: (id: number) =>
    axios.delete(`${API_BASE_URL}/persons/${id}`)
};
