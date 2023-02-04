import React, { ReactNode, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import FocusLock from 'react-focus-lock'; // library to trap the focus inside the compoknent;
import {
  Backdrop,
  StyledModal,
  Header,
  HeaderText,
  Content,
  CloseButton,
  Wrapper,
} from './Modal.styled';

interface ModalProps {
  isShown: boolean;
  onCloseModal: () => void;
  modalContent: ReactNode;
  headerText: string;
}

const Modal: React.FC<ModalProps> = ({
  isShown,
  onCloseModal,
  headerText,
  modalContent,
}) => {
  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.code !== 'Escape') return;
      onCloseModal();
    },
    [onCloseModal]
  );

  useEffect(() => {
    isShown
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');

    document.addEventListener('keydown', onKeyDown, false);
    return () => {
      document.removeEventListener('keydown', onKeyDown, false);
    };
  }, [onKeyDown, isShown]);

  const modal = (
    <>
      <Backdrop onClick={onCloseModal} />
      <FocusLock>
        <Wrapper
          aria-modal
          aria-labelledby={headerText}
          tabIndex={-1}
          role="dialog"
        >
          <StyledModal>
            <Header>
              <HeaderText>{headerText}</HeaderText>
              <CloseButton
                type="button"
                data-dismiss="modal"
                aria-label="Close"
                onClick={onCloseModal}
              >
                X
              </CloseButton>
            </Header>
            <Content>{modalContent}</Content>
          </StyledModal>
        </Wrapper>
      </FocusLock>
    </>
  );

  return isShown ? createPortal(modal, document.body) : null;
};

export default Modal;
