import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://rocketnotes-api-sz60.onrender.com',
});
