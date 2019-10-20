import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import createRootReducer from './createRootReducer';

const ConfigStore = (initialState, history) => {};

export default ConfigStore;
