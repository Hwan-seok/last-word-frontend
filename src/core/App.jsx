import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import history from 'utils/history';
import {Provider} from 'react-redux';
import configureStore from 'store/configStore';

import {AppTitle, AppHeader, AppFooter} from '../layouts';
import Routes from './Routes';

const initialState = {};
const {store, persistor} = configureStore(initialState, history);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <AppTitle></AppTitle>
      <AppHeader></AppHeader>
      <AppFooter></AppFooter>
      <Routes></Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
