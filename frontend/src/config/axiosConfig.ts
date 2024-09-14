import axios from 'axios';
import { MAIN_API } from '../config/routes_api';

const getStore = async () => {
  const { store } = await import('../store');
  return store;
};

const instance = axios.create({
  baseURL: MAIN_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(async (config) => {
  const store = await getStore();
  const user = store?.getState()?.user;
  if (user.token !== "") {
    config.headers.Authorization = `Bearer ${user.token}`;
  } else if(user.token === "") {
    delete config.headers.Authorization;
  }
  return config;
  });

export default instance;
