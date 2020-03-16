import { SocialProvider } from '../../enums/socialProvider.enum';

export interface SocialRegisterPayload {
  socialAccessToken: string;
  socialId: string;
  socialProvider: SocialProvider;
}

export interface SocialRegisterResponse {
  accessToken: string;
  refreshToken: string;
}

export interface SocialLoginPayload {
  socialAccessToken: string;
  socialId: string;
  socialProvider: SocialProvider;
}

export interface GetUserDetailSuccessPayload {
  imageUrl: string;
  name: string;
  win: number;
  lose: number;
  level: number;
}
