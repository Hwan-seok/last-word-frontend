import {
  LOADING_MODAL_OPEN,
  LOADING_MODAL_CLOSE,
  SUCCESS_MODAL_OPEN,
  SUCCESS_MODAL_CLOSE,
  FAILED_MODAL_OPEN,
  FAILED_MODAL_CLOSE,
} from './modal.constants';

export const loadingModalOpenAction = () => {
  return {
    type: LOADING_MODAL_OPEN,
  };
};

export const loadingModalCloseAction = () => {
  return {
    type: LOADING_MODAL_CLOSE,
  };
};

export const successModalOpenAction = () => {
  return {
    type: SUCCESS_MODAL_OPEN,
  };
};

export const successModalCloseAction = () => {
  return {
    type: SUCCESS_MODAL_CLOSE,
  };
};

export const failedModalOpenAction = () => {
  return {
    type: FAILED_MODAL_OPEN,
  };
};

export const failedModalCloseAction = () => {
  return {
    type: FAILED_MODAL_CLOSE,
  };
};

type ModalAction =
  | ReturnType<typeof loadingModalOpenAction>
  | ReturnType<typeof loadingModalCloseAction>
  | ReturnType<typeof successModalOpenAction>
  | ReturnType<typeof successModalCloseAction>
  | ReturnType<typeof failedModalOpenAction>
  | ReturnType<typeof failedModalCloseAction>;

export default ModalAction;
