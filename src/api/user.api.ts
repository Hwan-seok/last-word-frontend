import Axios, { jsonContentTypeHeader } from './axios';

export const getUserDetail = () => {
  return {
    data: {
      result: {
        imageUrl:
          'https://avatars1.githubusercontent.com/u/38072762?s=400&u=9ef592d4940e0f35ad342c6b6d5e0797b386d3e9&v=4',
        name: '강환석',
        level: 3,
        win: 10,
        lose: 100,
      },
    },
  };
  Axios.get('', {
    headers: jsonContentTypeHeader,
  });
};
