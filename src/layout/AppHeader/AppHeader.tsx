import React from 'react';
import Link from 'next/link';
import useAccount from '~/src/store/account/account.hook';
import { StyledAppHeader } from './AppHeader.styled';
// import LoginIcon from '~/src/components/svgIcons/LoginIcon';

const AppHeader: React.FC = () => {
  const { accountState } = useAccount();

  return (
    <>
      <StyledAppHeader>
        <Link href="/">
          <a className="header-logo">
            <img src="/static/images/MainLogo.png" alt="logo" />
          </a>
        </Link>
        {accountState.isLoginSuccess ? (
          <>
            <Link href="/rooms">
              <a className="header-item-left">게임하러 가기</a>
            </Link>
            <Link href="/mypage">
              <a className="header-item">마이페이지</a>
            </Link>
          </>
        ) : (
          <Link href="/login">
            <div className="header-item-left">
              <a>
                <h3>로그인</h3>
              </a>
            </div>
          </Link>
        )}
      </StyledAppHeader>
    </>
  );
};

export default AppHeader;
