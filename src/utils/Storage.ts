export const setTokenToLocalStorage = (
  accessToken: string,
  refreshToken: string,
) => {
  if (typeof window === 'undefined') {
    return;
  }
  window.localStorage.setItem('Access', accessToken);
  window.localStorage.setItem('Refresh', refreshToken);
};

export const getTokenFromLocalStorage = () => {
  if (typeof window === 'undefined') {
    return;
  }
  const accessToken = window.localStorage.getItem('Access');
  const refreshToken = window.localStorage.getItem('Refresh');
  return { accessToken, refreshToken };
};

export const clearTokenInLocalStorage = () => {
  if (typeof window === 'undefined') {
    return;
  }
  window.localStorage.removeItem('Access');
  window.localStorage.removeItem('Refresh');
  // To clear redux
  window.persistor.purge();
};
