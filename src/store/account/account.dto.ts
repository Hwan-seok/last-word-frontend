import { SocialProvider } from '../../enums/socialProvider';

export interface SocialRegisterPayload {
  socialAccessToken: string;
  socialId: string;
  socialProvider: SocialProvider;
  nickname: string;
}

export interface SocialRegisterResponse {
  accessToken: string;
  refreshToken: string;
}
