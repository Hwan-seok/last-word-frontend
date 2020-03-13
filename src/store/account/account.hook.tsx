import { useCallback } from 'react';

import { StoreState } from '../rootStore';
import { useSelector, useDispatch } from 'react-redux';
import { AccountReducerState } from './account.reducer';
import { SocialRegisterAction } from './account.action';

const useAccount = () => {
  const accountState: AccountReducerState = useSelector(
    (state: StoreState) => state.AccountReducer,
  );
  const dispatch = useDispatch();

  const loginRequest = useCallback(
    payload => dispatch(SocialRegisterAction.request(payload)),
    [dispatch],
  );

  return { accountState, loginRequest };
};

export default useAccount;
