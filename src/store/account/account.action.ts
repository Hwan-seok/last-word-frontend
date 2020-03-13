import { createAsyncAction, ActionType } from 'typesafe-actions';
import {
  SOCIAL_REGISTER_REQUEST,
  SOCIAL_REGISTER_SUCCESS,
  SOCIAL_REGISTER_FAILED,
} from './account.constants';
import { SocialRegisterPayload } from './account.dto';

export const SocialRegisterAction = createAsyncAction(
  SOCIAL_REGISTER_REQUEST,
  SOCIAL_REGISTER_SUCCESS,
  SOCIAL_REGISTER_FAILED,
)<SocialRegisterPayload, void, SocialRegisterPayload, undefined>();

type AccountAction = ActionType<typeof SocialRegisterAction>;

export default AccountAction;
