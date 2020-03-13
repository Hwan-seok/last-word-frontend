import React from 'react';
import useModal from '~/src/store/modal/modal.hook';
import SyncLoader from 'react-spinners/SyncLoader';
import theme from '../theme';
import { StyledModal } from './AppModal.styled';

const AppModal: React.FC = () => {
  const { ModalInfo, SuccessModalClose, FailedModalClose } = useModal();
  if (ModalInfo.loading) {
    return (
      <StyledModal>
        <SyncLoader
          size={'5vw'}
          //size={"150px"} this also works
          color={theme.color.primary}
          loading={true}
        />
      </StyledModal>
    );
  }

  if (ModalInfo.success) {
    return (
      <div
        style={{
          position: 'absolute',
          zIndex: 501,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'green',
        }}
      >
        성공 모달
        <span onClick={SuccessModalClose}>[닫기]</span>
      </div>
    );
  }

  if (ModalInfo.failed) {
    return (
      <div
        style={{
          position: 'absolute',
          zIndex: 501,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'red',
        }}
      >
        <div
          style={{
            width: '200px',
            height: '200px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div>실패 모달</div>
          <div onClick={FailedModalClose}>[닫기]</div>
        </div>
      </div>
    );
  } else return <div></div>;
};

export default AppModal;
