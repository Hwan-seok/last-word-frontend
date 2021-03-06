import { put, call, takeLatest } from 'redux-saga/effects';
import {
  loadingModalOpenAction,
  loadingModalCloseAction,
} from '../modal/modal.action';
import {
  SOCIAL_REGISTER_REQUEST,
  SOCIAL_LOGIN_REQUEST,
  GET_USER_DETAIL_REQUEST,
} from './account.constants';
import {
  SocialRegisterAction,
  SocialLoginAction,
  GetUserDetailAction,
} from './account.action';
import { setTokenToLocalStorage } from '../../utils/Storage';
import { socialRegisterApi, socialLoginApi } from '../../api/auth.api';
import { getUserDetail } from '../../api/user.api';

function* SocialRegisterRequest(action) {
  const { payload } = action;
  yield put(loadingModalOpenAction());

  try {
    const res = yield call(socialRegisterApi, payload);
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
      yield window.location.replace('/mypage');
    }
  } catch (err) {
    yield put(SocialRegisterAction.request(payload));
  } finally {
    yield put(loadingModalCloseAction());
  }
}

function* GetUserDetailRequest() {
  yield put(loadingModalOpenAction());

  try {
    const res = yield call(getUserDetail);

    yield put(GetUserDetailAction.success(res.data.result));
  } catch (err) {
    yield put(GetUserDetailAction.failure());
  } finally {
    yield put(loadingModalCloseAction());
  }
}

const accountSagas = [
  takeLatest(SOCIAL_REGISTER_REQUEST, SocialRegisterRequest),
  takeLatest(SOCIAL_LOGIN_REQUEST, SocialLoginRequest),
  takeLatest(GET_USER_DETAIL_REQUEST, GetUserDetailRequest),
];
export default accountSagas;
