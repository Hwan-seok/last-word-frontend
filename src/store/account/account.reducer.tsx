import isRefreshTokenExpired from '~/src/utils/isRefreshTokenExpired';
import { SocialProvider } from '../../enums/socialProvider.enum';
import AccountAction from './account.action';
import {
  SOCIAL_REGISTER_SUCCESS,
  SOCIAL_REGISTER_FAILED,
  SOCIAL_LOGIN_SUCCESS,
  SOCIAL_LOGIN_FAILED,
  GET_USER_DETAIL_SUCCESS,
  ACCOUNT_STATE_PURGE,
} from './account.constants';

export interface AccountReducerState {
  accessToken: string;
  refreshToken: string;
  socialProvider: SocialProvider;
  socialId: string;
  socialAccessToken: string;
  isLoginSuccess: boolean;
  imageUrl: string;
  name: string;
  win: number;
  lose: number;
  level: number;
}

const initialState: AccountReducerState = {
  accessToken: null,
  refreshToken: null,
  socialProvider: null,
  socialId: null,
  socialAccessToken: null,
  isLoginSuccess: !isRefreshTokenExpired(),
  imageUrl: null,
  name: null,
  win: 0,
  lose: 0,
  level: 1,
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

    case GET_USER_DETAIL_SUCCESS:
      return {
        ...state,
        imageUrl: action.payload.imageUrl,
        name: action.payload.name,
        win: action.payload.win,
        lose: action.payload.lose,
        level: action.payload.level,
      };

    case ACCOUNT_STATE_PURGE:
      return initialState;

    default:
      return state;
  }
};
