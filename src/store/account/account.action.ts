import { createAsyncAction, ActionType } from 'typesafe-actions';
import {
  SOCIAL_REGISTER_REQUEST,
  SOCIAL_REGISTER_SUCCESS,
  SOCIAL_REGISTER_FAILED,
  SOCIAL_LOGIN_REQUEST,
  SOCIAL_LOGIN_SUCCESS,
  SOCIAL_LOGIN_FAILED,
  GET_USER_DETAIL_FAILED,
  GET_USER_DETAIL_REQUEST,
  GET_USER_DETAIL_SUCCESS,
  ACCOUNT_STATE_PURGE,
} from './account.constants';
import {
  SocialRegisterPayload,
  SocialLoginPayload,
  GetUserDetailSuccessPayload,
} from './account.dto';

export const SocialRegisterAction = createAsyncAction(
  SOCIAL_REGISTER_REQUEST,
  SOCIAL_REGISTER_SUCCESS,
  SOCIAL_REGISTER_FAILED,
)<SocialRegisterPayload, void, SocialRegisterPayload, undefined>();

export const SocialLoginAction = createAsyncAction(
  SOCIAL_LOGIN_REQUEST,
  SOCIAL_LOGIN_SUCCESS,
  SOCIAL_LOGIN_FAILED,
)<SocialLoginPayload, void, SocialLoginPayload, undefined>();

export const GetUserDetailAction = createAsyncAction(
  GET_USER_DETAIL_REQUEST,
  GET_USER_DETAIL_SUCCESS,
  GET_USER_DETAIL_FAILED,
)<void, GetUserDetailSuccessPayload, void, undefined>();

export const StatePurgeAction = () => {
  return {
    type: ACCOUNT_STATE_PURGE,
  };
};

type AccountAction =
  | ActionType<typeof SocialRegisterAction>
  | ActionType<typeof SocialLoginAction>
  | ActionType<typeof GetUserDetailAction>
  | ReturnType<typeof StatePurgeAction>;

export default AccountAction;
