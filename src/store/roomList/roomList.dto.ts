import { GameMode } from '../../enums/gameMode.enum';
import { RoomStatus } from '../../enums/roomStatus.enum';

export interface GetRoomListRequestDto {
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

export interface GetRoomsCountResponseDto {
  roomsCount: number;
}

export interface CreateRoomRequestDto {
  roomName: string;
  roomCapacity: number;
  roomMode: GameMode;
}

export interface CreateRoomResponseDto {
  roomNumber: number;
}
