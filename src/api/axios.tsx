import axios from 'axios';
import {
  setTokenToLocalStorage,
  getTokenFromLocalStorage,
  clearTokenInLocalStorage,
} from '~/src/utils/Storage';
import isRefreshTokenExpired from '~/src/utils/isRefreshTokenExpired';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const Axios = axios.create();

const refreshURL = '/auth/token/refresh';

Axios.defaults.baseURL = publicRuntimeConfig.baseURL;
Axios.defaults.timeout = 3500;

export function setHeader(token: string) {
  Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export function removeHeader() {
  delete Axios.defaults.headers.common.Authorization;
}

Axios.interceptors.request.use(
  async config => {
    if (config.url === refreshURL) {
      console.log('#refresh request: ', config);
      return config;
    }
    const { accessToken } = getTokenFromLocalStorage();
    if (accessToken) {
      config.headers['Authorization'] = 'Bearer ' + accessToken;
    }

    console.log('request: ', config);
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

const UNAUTHORIZED = 401;

Axios.interceptors.response.use(
  response => {
    console.log('response:', response);
    return response;
  },
  async error => {
    console.log(error.response);

    if (error.code === 'ECONNABORTED') {
      console.log('타임아웃');

      const customError = new Error('TIME_OUT');
      return Promise.reject(customError);
    }
    if (!error.response) {
      console.log('서버가 죽었거나 네트워크 문제');
      //window.location.replace('/error');

      // 나중에 error.response.status === 500 인 것도 보내버리기. 현재는 request Time Out Error만 보내는 중
      //network error : 서버가 죽었거나 사용자의 네트워크에 문제 . 잠시후 다시 시도해 주세요 메시지 출력하기
      const customError = new Error('SERVER_DOWN');
      return Promise.reject(customError);
    }

    const originalRequest = error.config;
    if (
      error.response.status === UNAUTHORIZED &&
      error.response.data.message === 'Jwt Token Invalid'
    ) {
      console.log('Error: SNS and Refresh Token Error');
      return Promise.reject(error);
    } else if (
      error.response.status === UNAUTHORIZED &&
      !originalRequest._retry &&
      error.response.data.message === 'Jwt Token Expired' &&
      !isRefreshTokenExpired()
    ) {
      originalRequest._retry = true;
      const { refreshToken } = getTokenFromLocalStorage();
      setHeader(refreshToken);
      return Axios.get(refreshURL)
        .then(res => {
          if (res.data.isSuccess) {
            setTokenToLocalStorage(
              res.data.result.accessToken,
              res.data.result.refreshToken,
            );
            setHeader(res.data.result.accessToken);
            return Axios(originalRequest);
          }
        })
        .catch(err => {
          //refresh Token not verified
          if (err.response.status === UNAUTHORIZED) {
            console.log('refresh token error');

            clearTokenInLocalStorage();
            alert('인증정보가 만료되어 로그인이 필요합니다');
            window.location.replace('/login');
          }
        });
    }
    // 401인 경우 모두 로그인으로 보내기 코드

    // if (error.response.status === UNAUTHORIZED) {

    //   StorageClearToken();
    //   window.location.replace('/login');
    // }

    return Promise.reject(error);
  },
);

export const jsonContentTypeHeader = {
  headers: { 'Content-Type': 'application/json' },
};
export default Axios;
