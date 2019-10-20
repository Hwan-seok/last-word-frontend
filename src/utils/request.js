import axios from 'axios';
const NOT_AUTHORIZED_HTTP_CODE = 401;

const requestAPI = axios.create();

// request.defaults.baseURL = 'http://localhost:3000';

requestAPI.interceptors.request.use(
    (config) => {
      const accessToken = localStorage.getItem('access_token');
      const isNotRequiredAuthURL = config.url && config.url.includes('auth');

      if (accessToken && isNotRequiredAuthURL === false) {
        config.headers.Authorization = `bearer ${accessToken}`;
      }

      return config;
    },
    (error) => Promise.reject(error)
);
