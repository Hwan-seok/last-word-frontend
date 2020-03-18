import { createAsyncAction, ActionType } from 'typesafe-actions';
import {
  GET_ROOM_LIST_SUCCESS,
  GET_ROOM_LIST_FAILED,
  GET_ROOM_LIST_REQUEST,
  GET_ROOMS_COUNT_SUCCESS,
  GET_ROOMS_COUNT_FAILED,
  GET_ROOMS_COUNT_REQUEST,
} from './rooms.constants';
import {
  GetRoomListResponseDto,
  GetRoomListRequestDto,
  GetRoomsCountResponseDto,
} from './rooms.dto';

export const GetRoomListAction = createAsyncAction(
  GET_ROOM_LIST_REQUEST,
  GET_ROOM_LIST_SUCCESS,
  GET_ROOM_LIST_FAILED,
)<GetRoomListRequestDto, GetRoomListResponseDto, void, undefined>();

export const GetRoomsCountAction = createAsyncAction(
  GET_ROOMS_COUNT_REQUEST,
  GET_ROOMS_COUNT_SUCCESS,
  GET_ROOMS_COUNT_FAILED,
)<void, GetRoomsCountResponseDto, void, undefined>();

type RoomsAction =
  | ActionType<typeof GetRoomListAction>
  | ActionType<typeof GetRoomsCountAction>;

export default RoomsAction;
