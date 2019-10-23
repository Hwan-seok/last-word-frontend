import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';

import rootReducer from './rootReducer';
import history from '../utils/history';
import {persistStore, persistReducer} from 'redux-persist';

import rootSaga from './rootSaga';
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
};

export default (preloadedState) => {
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares)];

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const persistedReducer = persistReducer(
      persistConfig,
      rootReducer(history),
  );
  const store = createStore(
      persistedReducer,
      preloadedState,
      composeEnhancers(...enhancers),
  );
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return {
    store,
    persistor,
  };
};


/*
export type PersistConfig = {
  version?: number,
  storage: Object,
  key: string,
  keyPrefix?: string, // @TODO remove in v6
  blacklist?: Array<string>,
  whitelist?: Array<string>,
  transforms?: Array<Transform>,
  throttle?: number,
  migrate?: (PersistedState, number) => Promise<PersistedState>,
  stateReconciler?: false | Function,
  getStoredState?: PersistConfig =>Promise<PersistedState>,//used for migrations
  debug?: boolean,
  serialize?: boolean | Function,
  deserialize?: boolean | Function,
  timeout?: number,
  writeFailHandler?: Function,
} */
