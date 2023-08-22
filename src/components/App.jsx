import React, { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { currentUserThunk } from 'redux/auth/authThuncs';
import { selecIsRefresh } from 'redux/auth/selectors';
const Home = lazy(() => import('./pages/Home'));
const Modal = lazy(() => import('./Modal/Modal'));
const Contacts = lazy(() => import('./pages/Contacts'));
const RegistrationForm = lazy(() =>
  import('./RegistrationForm/RegistrationForm')
);
const LoginForm = lazy(() => import('./LoginForm/LoginForm'));
const PublicRoute = lazy(() => import('HOC/PublicRoute'));
const PrivatRoute = lazy(() => import('HOC/PrivatRoute'));
const NotFound = lazy(() => import('./NotFound/NotFound'));

export const App = () => {
  const isRefresh = useSelector(selecIsRefresh);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUserThunk());
  }, [dispatch]);
  return isRefresh ? (
    <h1>Loadding...</h1>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="contacts"
          element={
            <PrivatRoute>
              <Contacts />
            </PrivatRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute>
              <Modal>
                <RegistrationForm />
              </Modal>
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute>
              <Modal>
                <LoginForm />
              </Modal>
            </PublicRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
