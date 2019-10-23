import {
  makeAsyncActionTypes,
  makeAsyncActionCreator,
} from '../../utils/actionHelper';

export const authActionType = {
  LOGIN: makeAsyncActionTypes('LOGIN'),
  LOGOUT: makeAsyncActionTypes('LOGOUT'),
  REGISTER: makeAsyncActionTypes('REGISTER'),
};

export const authActionCreators = {
  login: makeAsyncActionCreator(authActionType.LOGIN),
  logout: makeAsyncActionCreator(authActionType.LOGOUT),
  register: makeAsyncActionTypes(authActionType.REGISTER),
};
