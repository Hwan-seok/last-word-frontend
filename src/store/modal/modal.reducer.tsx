import {
  LOADING_MODAL_OPEN,
  LOADING_MODAL_CLOSE,
  FAILED_MODAL_OPEN,
  FAILED_MODAL_CLOSE,
  SUCCESS_MODAL_OPEN,
  SUCCESS_MODAL_CLOSE,
} from './modal.constants';

import ModalAction from './modal.action';

export interface ModalReducerState {
  loading: boolean;
  success: boolean;
  failed: boolean;
  modalType: string;
}

const initialState = {
  loading: false,
  success: false,
  failed: false,
  modalType: 'Loading',
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ModalReducer = (
  state: ModalReducerState = initialState,
  action: ModalAction,
): ModalReducerState => {
  switch (action.type) {
    case LOADING_MODAL_OPEN:
      return {
        ...state,
        loading: true,
      };

    case LOADING_MODAL_CLOSE:
      return {
        ...state,
        loading: false,
      };

    case SUCCESS_MODAL_OPEN:
      return {
        ...state,
        success: true,
      };

    case SUCCESS_MODAL_CLOSE:
      return {
        ...state,
        success: false,
      };

    case FAILED_MODAL_OPEN:
      return {
        ...state,
        failed: true,
      };

    case FAILED_MODAL_CLOSE:
      return {
        ...state,
        failed: false,
      };

    default:
      return state;
  }
};
