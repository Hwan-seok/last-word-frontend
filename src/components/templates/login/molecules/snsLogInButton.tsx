import React from 'react';
import KakaoLogin from 'react-kakao-login/dist/';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

// import NaverLogin from '~/src/utils/NaverLogin';
import { StyledSocialLoginMolecules } from '../login.styled';
import getConfig from 'next/config';
import { SocialProvider } from '../../../../enums/socialProvider';
import NaverLoginButton from './naverLogin';

const SnsLogInButton: React.FC = () => {
  const { publicRuntimeConfig } = getConfig();

  const kakaoLoginSuccess = kakaoResponse => {
    successCall({
      provider: SocialProvider.KAKAO,
      accessToken: kakaoResponse.response.access_token,
      socialId: String(kakaoResponse.profile.id),
    });
  };

  const facebookLoginSuccess = facebookResponse => {
    successCall({
      provider: SocialProvider.FACEBOOK,
      accessToken: facebookResponse.accessToken,
      socialId: facebookResponse.id,
    });
  };

  const naverLoginSuccess = naverResponse => {
    successCall({
      provider: SocialProvider.NAVER,
      accessToken: naverResponse.accessToken,
      socialId: naverResponse.socialId,
    });
  };

  const successCall = res => {
    console.log(res);
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
