import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';

import configureStore from '../src/store/rootStore';
import { PersistGate } from 'redux-persist/integration/react';
import Layout from '../src/layout';
import Head from 'next/head';
//For Loading
import NProgress from 'nprogress';
import Router from 'next/router';

NProgress.configure({
  showSpinner: true,
});
const startProgress = () => NProgress.start();
const stopProgress = timer => {
  clearTimeout(timer);
  NProgress.done();
};

const showProgressBar = delay => {
  const timer = setTimeout(startProgress, delay);
  Router.events.on('routeChangeComplete', () => stopProgress(timer));
  Router.events.on('routeChangeError', () => stopProgress(timer));
};

Router.events.on('routeChangeStart', () => showProgressBar(1));

const { store, persistor } = configureStore();

const makeStore = () => {
  return store;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
class MyApp extends App<any, any> {
  render() {
    const { Component } = this.props;

    return (
      <>
        <Head>
          <title>LAST WORD | 웹 게임 끝말잇기 | 쿵쿵따 </title>
          <link rel="canonical" href="https://last-word.hwanseok.co.kr"></link>
          <meta property="og:url" content="https://last-word.hwanseok.co.kr" />
          <link rel="shortcut" href="/favicon.ico" />
          <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="LAST WORD | 웹 끝말잇기 | 쿵쿵따"
          />
          <meta property="og:site_name" content="LAST WORD" />
          <meta
            name="description"
            content="심심할땐 웹 끝말잇기 라스트워드를 합시다!"
          />
          <meta property="og:image" content="" />

          <meta
            property="og:description"
            content="심심할땐 웹 끝말잇기 라스트워드를 합시다!"
          />
        </Head>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Layout persistor={persistor}>
              <Component />
            </Layout>
          </PersistGate>
        </Provider>
      </>
    );
  }
}

export default withRedux(makeStore)(withReduxSaga(MyApp));
