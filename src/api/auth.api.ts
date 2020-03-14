import {
  SocialRegisterPayload,
  SocialLoginPayload,
} from '../store/account/account.dto';
import Axios, { jsonContentTypeHeader } from './axios';

export const socialRegisterApi = (payload: SocialRegisterPayload) => {
  const convertedPayload = JSON.stringify(payload);

  return { data: { result: { accessToken: 1234, refreshToken: 1234 } } };
  Axios.post('', convertedPayload, {
    ...jsonContentTypeHeader,
  });
};

export const socialLoginApi = (payload: SocialLoginPayload) => {
  const convertedPayload = JSON.stringify(payload);

  throw new Error();
  return Axios.post('', convertedPayload, {
    ...jsonContentTypeHeader,
  });
};
