import React from 'react';
import Link from 'next/link';
import useAccount from '~/src/store/account/account.hook';
import { StyledAppHeader } from './AppHeader.styled';
import ActivateLink from '../../utils/activateLink';
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
            <ActivateLink href="/rooms">
              <a className="header-item-left">게임하러 가기</a>
            </ActivateLink>
            <ActivateLink href="/mypage">
              <a className="header-item">마이페이지</a>
            </ActivateLink>
          </>
        ) : (
          <ActivateLink href="/login">
            <a className="header-item-left">로그인</a>
          </ActivateLink>
        )}
      </StyledAppHeader>
    </>
  );
};

export default AppHeader;
