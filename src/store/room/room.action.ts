import { createAsyncAction, ActionType } from 'typesafe-actions';
import {
  GET_ROOM_PARTICIPATED_USERS_REQUEST,
  GET_ROOM_PARTICIPATED_USERS_SUCCESS,
  GET_ROOM_PARTICIPATED_USERS_FAILED,
} from './room.constants';
import { GetRoomDto, ParticipatedUsersDto } from './room.dto';

export const GetRoomParticipatedUsersAction = createAsyncAction(
  GET_ROOM_PARTICIPATED_USERS_REQUEST,
  GET_ROOM_PARTICIPATED_USERS_SUCCESS,
  GET_ROOM_PARTICIPATED_USERS_FAILED,
)<GetRoomDto, ParticipatedUsersDto, void, undefined>();

type RoomDetailAction = ActionType<typeof GetRoomParticipatedUsersAction>;

export default RoomDetailAction;
