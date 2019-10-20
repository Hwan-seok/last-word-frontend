import {combineReducers} from 'redux';

import authReducer from './auth/auth.reducer';
import {connectRouter} from 'connected-react-router';

const createRootReducer = (history) =>
  combineReducers({
    auth: authReducer,
    router: connectRouter(history),
  });

export default createRootReducer;
