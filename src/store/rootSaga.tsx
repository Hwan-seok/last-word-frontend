import { all } from 'redux-saga/effects';
import accountSaga from './account/account.saga';
import roomListSagas from './roomList/roomList.saga';
import roomDetailSaga from './room/room.saga';

export default function* rootSaga() {
  yield all([...accountSaga, ...roomListSagas, ...roomDetailSaga]);
}
