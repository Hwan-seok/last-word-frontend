import { GetRoomListDto } from '../store/rooms/rooms.dto';
import Axios, { jsonContentTypeHeader } from './axios';
import { GameMode } from '../enums/gameMode.enum';
import { RoomStatus } from '../enums/roomStatus.enum';

export const getRoomListApi = (payload: GetRoomListDto) => {
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
        ],
      },
    },
  };
  return Axios.get('', {
    params: { offset, limit },
    headers: jsonContentTypeHeader,
  });
};
