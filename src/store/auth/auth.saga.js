import {push} from 'connected-react-router';
import {call, put, takeLatest} from 'redux-saga/effects';
import {authAPI} from '../../apis';
import {authActionCreators, authActionType} from './auth.action';

export function* login(action) {
  try {
    console.log(action);
    yield put(authActionCreators.login.request());
    console.log(action);
    const response = yield call(authAPI.login, action.payload);
    console.log(response);
    const {accessToken, refreshToken} = response;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    yield put(push('/'));
    yield put(authActionCreators.login.success({id: action.payload.id}));
  } catch (err) {
    yield put(authActionCreators.login.failure(err));
  }
}

export function* logout() {
  try {
    yield put(authActionCreators.logout.request());
    localStorage.clear();
    yield put(authActionCreators.logout.success());
  } catch (err) {
    yield put(authActionCreators.logout.failure());
  }
}

export const authSagas = [
  takeLatest(authActionType.LOGIN.INDEX, login),
  takeLatest(authActionType.LOGOUT.INDEX, logout),
];
