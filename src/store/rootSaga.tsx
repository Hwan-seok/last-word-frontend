import { all } from 'redux-saga/effects';
import accountSaga from './account/account.saga';
import roomSagas from './rooms/rooms.saga';

export default function* rootSaga() {
  yield all([...accountSaga, ...roomSagas]);
}
