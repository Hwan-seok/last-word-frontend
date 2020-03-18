import { put, call, takeLatest } from 'redux-saga/effects';
import {
  loadingModalOpenAction,
  loadingModalCloseAction,
} from '../modal/modal.action';
import { GetRoomListAction } from './rooms.action';
import { getRoomListApi } from '../../api/rooms.api';
import { GET_ROOM_LIST_REQUEST } from './rooms.constants';

export function* getRoomList(action) {
  const { payload } = action;
  console.log('ssdasd');
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

const roomSagas = [takeLatest(GET_ROOM_LIST_REQUEST, getRoomList)];

export default roomSagas;
