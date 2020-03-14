import { StyledLoginPage } from './login.styled';
import React from 'react';
import SnsLogInButton from './molecules/snsLogInButton';

const LoginPage: React.FC = () => (
  <>
    <StyledLoginPage>
      <div className="flex-container">
        <SnsLogInButton></SnsLogInButton>
      </div>
    </StyledLoginPage>
  </>
);

export default LoginPage;
