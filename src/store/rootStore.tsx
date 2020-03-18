/* eslint-disable @typescript-eslint/no-var-requires */
import { applyMiddleware, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootSaga from './rootSaga';
import { AccountReducerState, AccountReducer } from './account/account.reducer';
import { ModalReducerState, ModalReducer } from './modal/modal.reducer';
import { RoomsReducerState, RoomsReducer } from './rooms/rooms.reducer';

export interface StoreState {
  AccountReducer: AccountReducerState;
  ModalReducer: ModalReducerState;
  RoomsReducer: RoomsReducerState;
}
//will be deleted soon...

const persistConfig = {
  key: 'primary',
  storage,
  whitelist: ['AccountReducer'],
};

const rootReducer = combineReducers({
  AccountReducer,
  ModalReducer,
  RoomsReducer,
  // 다른 리듀서를 만들게되면 여기에 넣어줌..
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const store = createStore<any, any, any, any>(
    persistedReducer,
    bindMiddleware([sagaMiddleware]),
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store);

  return { store, persistor };
}

export default configureStore;
