import {authActionType} from './auth.action';

export const initialState = {
  isLoggedIn: false,
  id: '',
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionType.LOGIN.SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        id: action.payload.id,
      };
    case authActionType.LOGOUT.SUCCESS:
      return {
        ...initialState,
        isLoggedIn: false,
      };
    case authActionType.REGISTER.SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        id: action.payload.id,
      };

    default:
      return state;
  }
};

export default accountReducer;
