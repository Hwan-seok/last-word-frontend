import React, { useEffect } from 'react';
import { StyledMyPage } from './mypage.styled';
import { clearTokenInLocalStorage } from '../../../utils/Storage';
import { useRouter } from 'next/router';
import useAccount from '../../../store/account/account.hook';
const MyPageTemplate: React.FC = () => {
  const router = useRouter();
  const { accountState, getUserDetailRequest } = useAccount();

  const logOutButtonClick = () => {
    clearTokenInLocalStorage();
    alert('로그아웃 완료');
    router.push('/login');
  };

  useEffect(() => {
    getUserDetailRequest();
  });

  return (
    <>
      <StyledMyPage>
        <div className="user-info">
          <img src={accountState.imageUrl} alt="프로필 사진"></img>
          <div>{accountState.name}</div>
          <div>Lv {accountState.level}</div>
          <div>
            {accountState.win}승 {accountState.lose}패
          </div>
        </div>
        <button type="button" onClick={logOutButtonClick}>
          로그아웃
        </button>
      </StyledMyPage>
    </>
  );
};

export default MyPageTemplate;
