import { createAsyncAction, ActionType } from 'typesafe-actions';
import {
  SOCIAL_REGISTER_REQUEST,
  SOCIAL_REGISTER_SUCCESS,
  SOCIAL_REGISTER_FAILED,
  SOCIAL_LOGIN_REQUEST,
  SOCIAL_LOGIN_SUCCESS,
  SOCIAL_LOGIN_FAILED,
} from './account.constants';
import { SocialRegisterPayload, SocialLoginPayload } from './account.dto';

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

type AccountAction =
  | ActionType<typeof SocialRegisterAction>
  | ActionType<typeof SocialLoginAction>;

export default AccountAction;
