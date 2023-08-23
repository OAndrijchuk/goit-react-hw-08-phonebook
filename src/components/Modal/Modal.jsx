import React from 'react';
import { OverlayStyled } from './Modal.styled';
import PropTypes from 'prop-types';

const Modal = ({ children }) => {
  return <OverlayStyled>{children}</OverlayStyled>;
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.node,
};
