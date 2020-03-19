import { takeLatest, put, call } from 'redux-saga/effects';
import { GET_ROOM_PARTICIPATED_USERS_REQUEST } from './room.constants';
import {
  loadingModalOpenAction,
  loadingModalCloseAction,
} from '../modal/modal.action';
import { GetRoomParticipatedUsersAction } from './room.action';
import { getRoomParticipatedUsersApi } from '../../api/room.api';

// function* fetchData(api, payload, success) {
//   try {
//     const res = yield call(api, payload);
//     if (!res) throw Error('no response');
//     if (res) yield put(success(res.data.result));
//   } catch (err) {
//     yield console.log(err);
//   }
// }

export function* getRoomParticipatedUsers(action) {
  yield put(loadingModalOpenAction());
  const roomNumber = action.payload.roomNumber;

  try {
    const res = yield call(getRoomParticipatedUsersApi, roomNumber);
    yield put(GetRoomParticipatedUsersAction.success(res.data.result));
  } catch (err) {
    yield put(GetRoomParticipatedUsersAction.failure());
  } finally {
    yield put(loadingModalCloseAction());
  }
}

const roomDetailSaga = [
  takeLatest(GET_ROOM_PARTICIPATED_USERS_REQUEST, getRoomParticipatedUsers),
];

export default roomDetailSaga;
