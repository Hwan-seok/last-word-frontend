import axios from 'axios';

const requestAPI = axios.create();

// request.defaults.baseURL = 'http://localhost:3000';

requestAPI.interceptors.request.use(
    (config) => {},
    (error) => Promise.reject(error)
);
