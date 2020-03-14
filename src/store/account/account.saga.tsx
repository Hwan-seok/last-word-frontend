import { put, call, takeLatest } from 'redux-saga/effects';
import {
  loadingModalOpenAction,
  loadingModalCloseAction,
} from '../modal/modal.action';
import {
  SOCIAL_REGISTER_REQUEST,
  SOCIAL_LOGIN_REQUEST,
} from './account.constants';
import { SocialRegisterAction, SocialLoginAction } from './account.action';
import { setTokenToLocalStorage } from '../../utils/Storage';
import { socialRegisterApi, socialLoginApi } from '../../api/auth.api';

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

function* SocialLoginRequest(action) {
  const { payload } = action;

  yield put(loadingModalOpenAction());

  try {
    const res = yield call(socialLoginApi, payload);
    const { accessToken, refreshToken } = res;
    if (accessToken) {
      yield call(setTokenToLocalStorage, accessToken, refreshToken);
      yield put(SocialLoginAction.success());
    }
  } catch (err) {
    yield put(SocialRegisterAction.request(payload));
  } finally {
    yield put(loadingModalCloseAction());
  }
}

const accountSagas = [
  takeLatest(SOCIAL_REGISTER_REQUEST, SocialRegisterRequest),
  takeLatest(SOCIAL_LOGIN_REQUEST, SocialLoginRequest),
];
export default accountSagas;
