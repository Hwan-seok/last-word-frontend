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
    (error) => Promise.reject(error),
);

requestAPI.interceptors.response.use(
    (response) => {
      if (response && response.config.method !== 'get') {
        console.log('정상 처리');
      }
      return response.data;
    },
    (error) => {
      const {config, response} = error;
      const originalRequest = config;

      if (
        response &&
      response.status === NOT_AUTHORIZED_HTTP_CODE &&
      !originalRequest._retry
      ) {
      /* access token 요청 실패 - access token expired */
        originalRequest._retry = true;
        const refreshToken = localStorage.getItem('refresh_token');
        return requestAPI
            .get(`/api/accounts/refresh/${refreshToken}`)
            .then((res) => {
              const {accessToken, refreshToken} = res;
              localStorage.setItem('access_token', accessToken);
              localStorage.setItem('refresh_token', refreshToken);
              originalRequest.headers.Authorization = `bearer ${accessToken}`;
              return requestAPI(originalRequest);
            })
            .catch((refreshTokenError) => {
              if (
                refreshTokenError.respone &&
            refreshTokenError.response.status === NOT_AUTHORIZED_HTTP_CODE
              ) {
                /* refresh 요청 실패 - refresh token expired */
                window.location.replace('/api/login');
              }
              return Promise.reject(error);
            });
      }
      console.log('요청이 실패하였습니다');
      return Promise.reject(error);
    },
);

export default requestAPI;
