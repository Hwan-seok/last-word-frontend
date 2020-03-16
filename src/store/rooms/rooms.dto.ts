import { GameMode } from '../../enums/gameMode.enum';
import { RoomStatus } from '../../enums/roomStatus.enum';

export interface GetRoomListDto {
  offset: number;
  limit: number;
}

export interface GetRoomListResponseDto {
  roomList: Array<RoomDetailInfo>;
}

export interface RoomDetailInfo {
  roomNumber: number;
  roomName: string;
  participatedUserCount: number;
  maxUserCount: number;
  gameMode: GameMode;
  roomStatus: RoomStatus;
}
