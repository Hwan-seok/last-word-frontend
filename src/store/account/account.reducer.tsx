import isRefreshTokenExpired from '~/src/utils/isRefreshTokenExpired';
import { SocialProvider } from '../../enums/socialProvider';
import AccountAction from './account.action';
import {
  SOCIAL_REGISTER_SUCCESS,
  SOCIAL_REGISTER_FAILED,
  SOCIAL_LOGIN_SUCCESS,
  SOCIAL_LOGIN_FAILED,
} from './account.constants';

export interface AccountReducerState {
  accessToken: string;
  refreshToken: string;
  socialProvider: SocialProvider;
  socialId: string;
  socialAccessToken: string;
  isLoginSuccess: boolean;
}

const initialState: AccountReducerState = {
  accessToken: null,
  refreshToken: null,
  socialProvider: null,
  socialId: null,
  socialAccessToken: null,
  isLoginSuccess: !isRefreshTokenExpired(),
};

export const AccountReducer = (
  state: AccountReducerState = initialState,
  action: AccountAction,
): AccountReducerState => {
  switch (action.type) {
    case SOCIAL_REGISTER_SUCCESS:
      return {
        ...state,
        isLoginSuccess: true,
      };

    case SOCIAL_REGISTER_FAILED:
      return {
        ...state,
        socialAccessToken: action.payload.socialAccessToken,
        socialId: action.payload.socialId,
        socialProvider: action.payload.socialProvider,
      };

    case SOCIAL_LOGIN_SUCCESS:
      return {
        ...state,
      };

    case SOCIAL_LOGIN_FAILED:
      return { ...state };

    default:
      return state;
  }
};
