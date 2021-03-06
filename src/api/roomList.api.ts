import { GetRoomListRequestDto } from '../store/roomList/roomList.dto';
import Axios, { jsonContentTypeHeader } from './axios';
import { GameMode } from '../enums/gameMode.enum';
import { RoomStatus } from '../enums/roomStatus.enum';

export const getRoomListApi = (payload: GetRoomListRequestDto) => {
  const { offset, limit } = payload;
  return {
    data: {
      result: {
        roomList: [
          {
            roomNumber: 1,
            roomName: '1번방',
            participatedUserCount: 1,
            maxUserCount: 6,
            gameMode: GameMode.NORMAL,
            roomStatus: RoomStatus.WAITING,
          },
          {
            roomNumber: 2,
            roomName: '2번방',
            participatedUserCount: 2,
            maxUserCount: 6,
            gameMode: GameMode.NORMAL,
            roomStatus: RoomStatus.WAITING,
          },
        ],
      },
    },
  };
  return Axios.get('', {
    params: { offset, limit },
    headers: jsonContentTypeHeader,
  });
};

export const getRoomCountApi = () => {
  return {
    data: {
      result: {
        roomsCount: 34,
      },
    },
  };
  return Axios.get('', {
    headers: jsonContentTypeHeader,
  });
};

export const createRoomApi = payload => {
  return { data: { result: { createdRoomNumber: 5 } } };
  return Axios.post('', payload, { headers: jsonContentTypeHeader });
};
