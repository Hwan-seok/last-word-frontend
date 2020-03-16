import { put, call } from 'redux-saga/effects';
import {
  loadingModalOpenAction,
  loadingModalCloseAction,
} from '../modal/modal.action';
import { GetRoomListAction } from './rooms.action';
import { getRoomListApi } from '../../api/rooms.api';

export function* getRoomList(action) {
  const { payload } = action;

  try {
    yield put(loadingModalOpenAction());
    const res = yield call(getRoomListApi, payload);
    yield put(GetRoomListAction.success(res));
  } catch (err) {
    yield put(GetRoomListAction.failure());
  } finally {
    yield put(loadingModalCloseAction());
  }
}
