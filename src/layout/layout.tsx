/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Global } from '@emotion/core';
import GlobalStyle from './globalStyled';

import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import AppModal from './AppModal';
declare global {
  interface Window {
    persistor: any;
  }
}

interface LayoutProps {
  persistor: any;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  window.persistor = props.persistor;

  return (
    <div>
      <Global styles={GlobalStyle} />
      <AppModal />
      <AppHeader />
      <div>{props.children}</div>
      <AppFooter />
    </div>
  );
};

export default Layout;
