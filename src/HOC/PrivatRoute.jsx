import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsAuth } from 'redux/auth/selectors';
import PropTypes from 'prop-types';

const PrivatRoute = ({ children }) => {
  const location = useLocation();
  const isAuth = useSelector(selectIsAuth);
  return isAuth ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
export default PrivatRoute;

PrivatRoute.propTypes = {
  children: PropTypes.node,
};
