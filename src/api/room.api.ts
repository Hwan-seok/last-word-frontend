import Axios, { jsonContentTypeHeader } from './axios';

export const getRoomParticipatedUsersApi = (roomNumber: number) => {
  return {
    data: {
      result: {
        users: [
          {
            name: '박새로이',
            level: 3,
            profileImageUrl:
              'https://avatars1.githubusercontent.com/u/38072762?s=400&u=9ef592d4940e0f35ad342c6b6d5e0797b386d3e9&v=4',
            isReady: false,
            isSuperUser: true,
          },
          {
            name: '박나라',
            level: 2,
            profileImageUrl:
              'https://avatars1.githubusercontent.com/u/38072762?s=400&u=9ef592d4940e0f35ad342c6b6d5e0797b386d3e9&v=4',
            isReady: true,
            isSuperUser: false,
          },
          {
            name: '섹시한 김정호',
            level: 100,
            profileImageUrl:
              'https://avatars1.githubusercontent.com/u/38072762?s=400&u=9ef592d4940e0f35ad342c6b6d5e0797b386d3e9&v=4',
            isReady: false,
            isSuperUser: false,
          },
        ],
      },
    },
  };
  return Axios.get(`${roomNumber}`, { headers: jsonContentTypeHeader });
};
