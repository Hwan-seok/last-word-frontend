import { put, call, takeLatest } from 'redux-saga/effects';
import {
  loadingModalOpenAction,
  loadingModalCloseAction,
} from '../modal/modal.action';
import {
  GetRoomListAction,
  GetRoomsCountAction,
  CreateRoomAction,
} from './roomList.action';
import {
  getRoomListApi,
  getRoomCountApi,
  createRoomApi,
} from '../../api/roomList.api';
import {
  GET_ROOM_LIST_REQUEST,
  GET_ROOMS_COUNT_REQUEST,
  CREATE_ROOM_REQUEST,
} from './roomList.constants';
import router from 'next/router';

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

export function* createRoom(action) {
  const { payload } = action;
  yield put(loadingModalOpenAction());

  try {
    const res = yield call(createRoomApi, payload);
    yield put(CreateRoomAction.success());
    router.replace(`/room/${res.data.result.createdRoomNumber}`);
  } catch (err) {
    yield put(CreateRoomAction.failure());
  } finally {
    yield put(loadingModalCloseAction());
  }
}

const roomListSagas = [
  takeLatest(GET_ROOM_LIST_REQUEST, getRoomList),
  takeLatest(GET_ROOMS_COUNT_REQUEST, getRoomsCount),
  takeLatest(CREATE_ROOM_REQUEST, createRoom),
];

export default roomListSagas;
