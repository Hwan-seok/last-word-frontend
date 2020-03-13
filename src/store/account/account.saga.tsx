import { put, call, takeLatest } from 'redux-saga/effects';
import {
  loadingModalOpenAction,
  loadingModalCloseAction,
} from '../modal/modal.action';
import { SOCIAL_REGISTER_REQUEST } from './account.constants';
import { SocialRegisterAction } from './account.action';
import { setTokenToLocalStorage } from '../../utils/Storage';
import { socialRegisterApi } from '../../api/auth.api';

function* SocialRegisterRequest(action) {
  const { payload } = action;
  yield put(loadingModalOpenAction());

  try {
    const res = yield call(socialRegisterApi, payload);
    console.log(res.data);
    const { accessToken, refreshToken } = res.data.result;
    if (accessToken)
      yield call(setTokenToLocalStorage, accessToken, refreshToken);
    yield put(SocialRegisterAction.success());
  } catch (error) {
    yield put(SocialRegisterAction.failure(payload));
  } finally {
    yield put(loadingModalCloseAction());
  }
}

const accountSagas = [
  takeLatest(SOCIAL_REGISTER_REQUEST, SocialRegisterRequest),
];
export default accountSagas;
