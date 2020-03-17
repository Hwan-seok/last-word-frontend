import React, { useEffect } from 'react';
import {
  StyledMyPage,
  StyledUserDetailDuplicateButtons,
} from './mypage.styled';
import { clearTokenInLocalStorage } from '../../../utils/Storage';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import useAccount from '../../../store/account/account.hook';
import { StatePurgeAction } from '../../../store/account/account.action';
const MyPageTemplate: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { accountState, getUserDetailRequest } = useAccount();

  const logOutButtonClick = () => {
    clearTokenInLocalStorage();
    dispatch(StatePurgeAction());
    alert('로그아웃 완료');
    router.push('/login');
  };

  useEffect(() => {
    getUserDetailRequest();
  }, [getUserDetailRequest]);

  return (
    <>
      <StyledMyPage>
        <div className="user-info">
          <div className="profile-image-wrapper">
            <img
              className="profile-image"
              src={accountState.imageUrl}
              alt="프로필 사진"
            ></img>
            <span className="profile-image-replace">프로필 사진 변경</span>
          </div>
          <div className="profile-detail">
            <div>{accountState.name}</div>
            <div>Lv {accountState.level}</div>
            <div>
              {accountState.win}승 {accountState.lose}패
            </div>
            <button
              className="button-logout"
              type="button"
              onClick={logOutButtonClick}
            >
              로그아웃
            </button>
          </div>
        </div>

        <StyledUserDetailDuplicateButtons></StyledUserDetailDuplicateButtons>
      </StyledMyPage>
    </>
  );
};

export default MyPageTemplate;
