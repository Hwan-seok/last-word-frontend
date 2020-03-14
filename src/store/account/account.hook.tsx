import { useCallback } from 'react';

import { StoreState } from '../rootStore';
import { useSelector, useDispatch } from 'react-redux';
import { AccountReducerState } from './account.reducer';
import { SocialRegisterAction, SocialLoginAction } from './account.action';

const useAccount = () => {
  const dispatch = useDispatch();

  const accountState: AccountReducerState = useSelector(
    (state: StoreState) => state.AccountReducer,
  );

  const socialRegisterRequest = useCallback(
    payload => dispatch(SocialRegisterAction.request(payload)),
    [dispatch],
  );

  const socialLoginRequest = useCallback(
    payload => dispatch(SocialLoginAction.request(payload)),
    [dispatch],
  );

  return { accountState, socialLoginRequest, socialRegisterRequest };
};

export default useAccount;
