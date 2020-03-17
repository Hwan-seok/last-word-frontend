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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Necessitatibus, in culpa asperiores iusto cupiditate officia id
            autem minus sint suscipit veritatis, sit amet sed facere ullam
            veniam recusandae quos voluptate! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Necessitatibus, in culpa asperiores
            iusto cupiditate officia id autem minus sint suscipit veritatis, sit
            amet sed facere ullam veniam recusandae quos voluptate! Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Necessitatibus, in
            culpa asperiores iusto cupiditate officia id autem minus sint
            suscipit veritatis, sit amet sed facere ullam veniam recusandae quos
            voluptate!
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
