/* eslint-disable @typescript-eslint/no-explicit-any */

//
// code from : https://github.com/peoplefund-tech/react-naver-login
//
import React, { useEffect } from 'react';

interface OnSuccessParameter {
  accessToken: string;
  socialId: string;
  name?: string;
  email?: string;
}

interface NaverButtonProps {
  callbackUrl: string;
  clientId: string;
  onSuccess: (loginInfo: OnSuccessParameter) => void;
  onFailure: () => void;
}

const NAVER_ID_SDK_URL =
  'https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js';

const initLoginButton = function(props) {
  if (typeof window === 'undefined') {
    return;
  }
  const clientId = props.clientId,
    callbackUrl = props.callbackUrl,
    onSuccess = props.onSuccess,
    onFailure = props.onFailure;
  const location = window.location;
  const naver = window['naver'];
  const naverLogin = new naver.LoginWithNaverId({
    callbackUrl: callbackUrl,
    clientId: clientId,
    isPopup: true,
    loginButton: { color: 'green', type: 3, height: 60 },
    scope: {},
  });
  naverLogin.init();
  if (!window.opener) {
    naver.successCallback = function(data: OnSuccessParameter) {
      console.log('OPENER');
      return onSuccess(data);
    };
    naver.FailureCallback = onFailure;
  } else {
    naverLogin.getLoginStatus(function(status) {
      if (!status || location.hash.indexOf('#access_token') === -1) {
        return;
      }

      const accessToken = window.location.hash
        .split('&')[0]
        .slice(1)
        .split('=')[1];
      console.log(naverLogin);
      window.opener.naver.successCallback({
        socialId: naverLogin.user.id,
        accessToken,
        name: naverLogin.user.name,
        email: naverLogin.user.email,
      });

      window.close();
    });
  }
};

const appendNaverButton = function() {
  if (document && document.querySelectorAll('#naverIdLogin').length === 0) {
    const naverId = document.createElement('div');
    naverId.id = 'naverIdLogin';
    naverId.style.position = 'absolute';
    naverId.style.top = '-10000px';
    document.body.appendChild(naverId);
  }
};

const loadScript = function(props) {
  if (document && document.querySelectorAll('#naver-login-sdk').length === 0) {
    const script = document.createElement('script');
    script.id = 'naver-login-sdk';
    script.src = NAVER_ID_SDK_URL;
    script.onload = function() {
      return initLoginButton(props);
    };
    document.head.appendChild(script);
  }
};

const componentDidMount = (props: NaverButtonProps) => {
  if (typeof window === 'undefined') {
    return;
  }
  loadScript(props);
  appendNaverButton();
};

const NaverLoginButton: React.FC<NaverButtonProps> = props => {
  useEffect(() => componentDidMount(props), [props]);

  return (
    <img
      src="/static/images/naver_login_btn.png"
      className="login-button-bottom"
      onClick={() => {
        if (
          !document ||
          !(document as any).querySelector('#naverIdLogin').firstChild
        )
          return;
        const naverLoginButton: any = (document as any).querySelector(
          '#naverIdLogin',
        ).firstChild;
        naverLoginButton.click();
      }}
      alt="네이버 아이디로 로그인"
    />
  );
};

export default NaverLoginButton;
