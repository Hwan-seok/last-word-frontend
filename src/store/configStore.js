import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';

import createRootReducer from './rootReducer';
import history from '../utils/history';
import {persistStore, persistReducer} from 'redux-persist';

import createRootSaga from './rootSaga';
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
};

const configStore = (preloadedState) => {
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares)];

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const persistedReducer = persistReducer(
      persistConfig,
      createRootReducer(history)
  );
  const store = createStore(
      persistedReducer,
      preloadedState,
      composeEnhancers(...enhancers)
  );
  const persistor = persistStore(store);

  sagaMiddleware.run(createRootSaga);

  return {
    store,
    persistor,
  };
};

export default configStore;

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
