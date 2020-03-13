import React from 'react';
import { StyledBody } from './index.styled';
import Link from 'next/link';

const IndexPage: React.FC = () => {
  return (
    <>
      <StyledBody>
        <div className="body-wrapper">
          <h1>라스트 워드란?</h1>
          <div className="app-description">
            라스트워드는 이러이러해서 저러저러해서 끝말잇기 할 수 있고 회원가입
            쉽고
            하하하하ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏssssssssssssssssㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ
          </div>
          <div className="gif-container">
            <div className="gif-item">
              <img src="/static/images/giphy-1.gif" alt="1"></img>
            </div>
            <div className="gif-item">
              <img src="/static/images/giphy-2.gif"></img>
            </div>
          </div>
          <div className="login-button">
            <Link href="/login">
              <a>3초만에 가입하고 게임하러 가기!</a>
            </Link>
          </div>
        </div>
      </StyledBody>
    </>
  );
};

export default IndexPage;
