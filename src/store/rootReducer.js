import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import authReducer from './auth/auth.reducer';

const rootReducer = (history) =>
  combineReducers({
    auth: authReducer,
    router: connectRouter(history),
  });

export default rootReducer;
