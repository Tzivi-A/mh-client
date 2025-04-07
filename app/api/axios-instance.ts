import axios from 'axios';
import { config } from '~/config/env';

const axiosInstance = axios.create({
  baseURL: config.apiUrl,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosInstance;
