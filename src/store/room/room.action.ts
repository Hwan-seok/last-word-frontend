import { createAsyncAction, ActionType } from 'typesafe-actions';
import {
  GET_ROOM_PARTICIPATED_USERS_REQUEST,
  GET_ROOM_PARTICIPATED_USERS_SUCCESS,
  GET_ROOM_PARTICIPATED_USERS_FAILED,
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILED,
} from './room.constants';
import { GetRoomDto, ParticipatedUsersDto, Word } from './room.dto';

export const GetRoomParticipatedUsersAction = createAsyncAction(
  GET_ROOM_PARTICIPATED_USERS_REQUEST,
  GET_ROOM_PARTICIPATED_USERS_SUCCESS,
  GET_ROOM_PARTICIPATED_USERS_FAILED,
)<GetRoomDto, ParticipatedUsersDto, void, undefined>();

export const SendMessageAction = createAsyncAction(
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILED,
)<Word, void, void, undefined>();

type RoomDetailAction =
  | ActionType<typeof GetRoomParticipatedUsersAction>
  | ActionType<typeof SendMessageAction>;

export default RoomDetailAction;
