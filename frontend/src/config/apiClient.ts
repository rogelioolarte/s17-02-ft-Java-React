import axios from 'axios';
import { MAIN_API } from '../config/routes_api';

const apiClient = axios.create({
  baseURL: MAIN_API,
  headers: {
    'Content-Type': 'application/json',
    'access-control-allow-origin': 'http://localhost:5173'
    // Otros encabezados comunes que quieras agregar, como Authorization
  },
  withCredentials: true, // Si tu servidor requiere credenciales de origen cruzado
});

export default apiClient;
