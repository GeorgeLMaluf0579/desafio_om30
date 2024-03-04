import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/v1';

export const getAllCitizens = () => {
  return axios.get(`${API_BASE_URL}/citizens`);
}