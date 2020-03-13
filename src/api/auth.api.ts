import { SocialRegisterPayload } from '../store/account/account.dto';
import Axios, { jsonContentTypeHeader } from './axios';

export const socialRegisterApi = (payload: SocialRegisterPayload) => {
  const convertedPayload = JSON.stringify(payload);

  return Axios.post('', convertedPayload, {
    ...jsonContentTypeHeader,
  });
};
