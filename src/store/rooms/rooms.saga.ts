import { put, call, takeLatest } from 'redux-saga/effects';
import {
  loadingModalOpenAction,
  loadingModalCloseAction,
} from '../modal/modal.action';
import { GetRoomListAction, GetRoomsCountAction } from './rooms.action';
import { getRoomListApi, getRoomCountApi } from '../../api/rooms.api';
import {
  GET_ROOM_LIST_REQUEST,
  GET_ROOMS_COUNT_REQUEST,
} from './rooms.constants';

export function* getRoomList(action) {
  const { payload } = action;
  try {
    yield put(loadingModalOpenAction());
    const res = yield call(getRoomListApi, payload);
    yield put(GetRoomListAction.success(res.data.result));
  } catch (err) {
    yield put(GetRoomListAction.failure());
  } finally {
    yield put(loadingModalCloseAction());
  }
}

export function* getRoomsCount() {
  yield put(loadingModalOpenAction());

  try {
    const res = yield call(getRoomCountApi);
    yield put(GetRoomsCountAction.success(res.data.result));
  } catch {
    yield put(GetRoomsCountAction.failure());
  } finally {
    yield put(loadingModalCloseAction());
  }
}

const roomSagas = [
  takeLatest(GET_ROOM_LIST_REQUEST, getRoomList),
  takeLatest(GET_ROOMS_COUNT_REQUEST, getRoomsCount),
];

export default roomSagas;
