/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import NaverLogin from 'src/components/templates/login/molecules/naverLogin';
import getConfig from 'next/config';

const NaverLoginCallbackPage: React.FC = () => {
  const { publicRuntimeConfig } = getConfig();

  return (
    <>
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 99,
          backgroundColor: 'white',
        }}
      >
        로딩중입니다...
      </div>
      <NaverLogin
        clientId={publicRuntimeConfig.NaverApiKey}
        callbackUrl={publicRuntimeConfig.NaverCallbackUrl}
        onSuccess={res => console.log('login on Success', res)}
        onFailure={() => console.error('error')}
      />
    </>
  );
};

export default NaverLoginCallbackPage;
