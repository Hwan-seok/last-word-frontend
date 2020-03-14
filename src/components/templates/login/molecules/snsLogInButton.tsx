import React from 'react';
import KakaoLogin from 'react-kakao-login/dist/';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

import { StyledSocialLoginMolecules } from '../login.styled';
import getConfig from 'next/config';
import { SocialProvider } from '../../../../enums/socialProvider';
import NaverLoginButton from './naverLogin';
import useAccount from '../../../../store/account/account.hook';

const SnsLogInButton: React.FC = () => {
  const { socialLoginRequest } = useAccount();

  const { publicRuntimeConfig } = getConfig();

  const kakaoLoginSuccess = kakaoResponse => {
    successCall({
      socialProvider: SocialProvider.KAKAO,
      socialAccessToken: kakaoResponse.response.access_token,
      socialId: String(kakaoResponse.profile.id),
    });
  };

  const facebookLoginSuccess = facebookResponse => {
    successCall({
      socialProvider: SocialProvider.FACEBOOK,
      socialAccessToken: facebookResponse.accessToken,
      socialId: facebookResponse.id,
    });
  };

  const naverLoginSuccess = naverResponse => {
    successCall({
      socialProvider: SocialProvider.NAVER,
      socialAccessToken: naverResponse.accessToken,
      socialId: naverResponse.socialId,
    });
  };

  const successCall = res => {
    console.log(res);
    socialLoginRequest(res);
  };

  return (
    <>
      <StyledSocialLoginMolecules>
        <KakaoLogin
          jsKey={publicRuntimeConfig.KakaoApiKey}
          onSuccess={res => {
            console.log(res);
            kakaoLoginSuccess(res);
          }}
          onFailure={res => console.log('failed', res)}
          getProfile
          render={(props: any) => (
            <img
              className="login-button-top"
              alt="카카오톡으로 로그인하기"
              src="/static/images/kakao_login_btn.png"
              onClick={props.onClick}
            />
          )}
        />
        <FacebookLogin
          appId={publicRuntimeConfig.FacebookApiKey}
          autoLoad={false}
          fields="name,email,picture"
          scope="public_profile"
          callback={res => facebookLoginSuccess(res)}
          onFailure={() => console.log('FAILED')}
          render={renderProps => (
            <>
              <img
                alt="카카오톡으로 로그인하기"
                src="/static/images/facebook_login_btn.png"
                onClick={renderProps.onClick}
              />
            </>
          )}
        />
        <NaverLoginButton
          clientId={publicRuntimeConfig.NaverApiKey}
          callbackUrl={publicRuntimeConfig.NaverCallbackUrl}
          onSuccess={res => {
            naverLoginSuccess(res);
          }}
          onFailure={() => console.error('error')}
        />
      </StyledSocialLoginMolecules>
    </>
  );
};

export default SnsLogInButton;
