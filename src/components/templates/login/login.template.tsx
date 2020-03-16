import { StyledLoginPage } from './login.styled';
import React from 'react';
import SnsLogInButton from './molecules/snsLogInButton';
import useAccount from '../../../store/account/account.hook';
import { useRouter } from 'next/router';

const LoginPageTemplate: React.FC = () => {
  const { accountState } = useAccount();
  const router = useRouter();

  if (accountState.isLoginSuccess) {
    router.push('/mypage');
  }
  return (
    <>
      <StyledLoginPage>
        <div className="flex-container">
          <SnsLogInButton></SnsLogInButton>
        </div>
      </StyledLoginPage>
    </>
  );
};

export default LoginPageTemplate;
