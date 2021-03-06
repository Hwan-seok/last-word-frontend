import React from 'react';
import { StyledBody } from './index.styled';
import Link from 'next/link';
import { ChannelTalk } from 'react-channel-plugin';
import getConfig from 'next/config';
import useAccount from '../../store/account/account.hook';

const IndexPage: React.FC = () => {
  const { accountState } = useAccount();
  const { publicRuntimeConfig } = getConfig();
  const onTalkError = React.useCallback(err => {
    console.error('Error:', err);
  }, []);

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
          {accountState.isLoginSuccess ? (
            <Link href="/rooms/[offset]" as={`/rooms/1`}>
              <a className="login-button">게임하러 가기!</a>
            </Link>
          ) : (
            <Link href="/login">
              <a className="login-button">3초만에 가입하고 게임하러 가기!</a>
            </Link>
          )}
          <ChannelTalk
            pluginKey={publicRuntimeConfig.ChannelTalkKey}
            locale="ko"
            userId={accountState.id}
            profile={{
              name: accountState.name,
              avatarUrl: accountState.imageUrl,
            }}
            hideDefaultLauncher={false}
            hideNavigationBarOnChatView={false}
            openChatDirectlyAsPossible
            onError={onTalkError}
          />
        </div>
      </StyledBody>
    </>
  );
};

export default IndexPage;
