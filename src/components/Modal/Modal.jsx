import React from 'react';
import { OverlayStyled } from './Modal.styled';

const Modal = ({ children }) => {
  return <OverlayStyled>{children}</OverlayStyled>;
};

export default Modal;
