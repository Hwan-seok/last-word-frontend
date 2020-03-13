import { all } from 'redux-saga/effects';
import accountSaga from './account/account.saga';

export default function* rootSaga() {
  yield all([...accountSaga]);
}
