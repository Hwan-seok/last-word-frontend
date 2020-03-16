import { createAsyncAction, ActionType } from 'typesafe-actions';
import {
  GET_ROOM_LIST_SUCCESS,
  GET_ROOM_LIST_FAILED,
  GET_ROOM_LIST_REQUEST,
} from './rooms.constants';
import { GetRoomListResponseDto } from './rooms.dto';

export const GetRoomListAction = createAsyncAction(
  GET_ROOM_LIST_REQUEST,
  GET_ROOM_LIST_SUCCESS,
  GET_ROOM_LIST_FAILED,
)<void, GetRoomListResponseDto, void, undefined>();

type RoomsAction = ActionType<typeof GetRoomListAction>;

export default RoomsAction;
