import {createSelector} from 'reselect';
import {initialState} from './auth.reducer';

const selectAccount = (state) => state.auth || initialState;

const accountToken = createSelector(
    selectAccount,
    (accountState) => accountState.token
);

const isCheckDuplicate = createSelector(
    selectAccount,
    (accountState) => accountState.isCheckDuplicate
);

export default {accountToken, isCheckDuplicate};
