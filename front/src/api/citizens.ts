import axios from 'axios';
import CitizenProps from '../interfaces/Citizen';

const API_BASE_URL = 'http://localhost:3000/api/v1';

export const getAllCitizens = (query: string, limit: number, offset: number) => {
  return axios.get(`${API_BASE_URL}/citizens`, { params: { query, limit, offset} });
}

export const createCitizen = (citizenData: CitizenProps) => {
  return axios.post(`${API_BASE_URL}/citizens`, { citizen: citizenData})
}