import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../rootStore';

import { useCallback } from 'react';

import { ModalReducerState } from './modal.reducer';
import {
  loadingModalCloseAction,
  loadingModalOpenAction,
  failedModalCloseAction,
  failedModalOpenAction,
  successModalCloseAction,
  successModalOpenAction,
} from './modal.action';

export default function useModal() {
  const modalStore: ModalReducerState = useSelector(
    (state: StoreState) => state.ModalReducer,
  );
  const dispatch = useDispatch();

  const LoadingModalOpen = useCallback(
    () => dispatch(loadingModalOpenAction()),
    [dispatch],
  );
  const LoadingModalClose = useCallback(
    () => dispatch(loadingModalCloseAction()),
    [dispatch],
  );

  const SuccessModalOpen = useCallback(
    () => dispatch(successModalOpenAction()),
    [dispatch],
  );
  const SuccessModalClose = useCallback(
    () => dispatch(successModalCloseAction()),
    [dispatch],
  );

  const FailedModalOpen = useCallback(() => dispatch(failedModalOpenAction()), [
    dispatch,
  ]);
  const FailedModalClose = useCallback(
    () => dispatch(failedModalCloseAction()),
    [dispatch],
  );

  return {
    ModalInfo: modalStore,
    LoadingModalOpen,
    LoadingModalClose,
    SuccessModalOpen,
    SuccessModalClose,
    FailedModalOpen,
    FailedModalClose,
  };
}
