import axios from 'axios';
import { MAIN_API } from '../config/routes_api';
import { useUserActions } from '../hooks/useUserActions';

const apiClient = axios.create({
  baseURL: MAIN_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

axios.interceptors.request.use((config) => {
    const { user } = useUserActions()
    if (user.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  });

export default apiClient;
