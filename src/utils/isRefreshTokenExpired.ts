import jwtDecode from 'jwt-decode';
import { getTokenFromLocalStorage } from './Storage';

const isrefreshTokenExpired = () => {
  if (typeof window === 'undefined') {
    return true;
  }

  try {
    const { refreshToken } = getTokenFromLocalStorage();
    if (!refreshToken) {
      return true;
    }

    const decodeToken = jwtDecode(refreshToken);
    const currentTime = new Date().getTime() / 1000;

    if (decodeToken.exp < currentTime) {
      return true;
    }
    return false;
  } catch {
    return true;
  }
};

export default isrefreshTokenExpired;
