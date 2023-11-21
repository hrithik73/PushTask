import { API_URL, TOKEN } from '@env';
import axios from 'axios';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

api.defaults.headers.common.Authorization = `Bearer ${TOKEN}`;
