import React from 'react';
import {
  LogLinkStyled,
  LoginContStyled,
  LogoutContStyled,
  UserMenuStyled,
} from './UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUserThunk } from 'redux/auth/authThuncs';
import { selectIsAuth, selectUserEmail } from 'redux/auth/selectors';
import { Button } from 'components/Form/SimpleForm.styled';

export const UserMenu = () => {
  const userEmail = useSelector(selectUserEmail);
  const isAuth = useSelector(selectIsAuth);

  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOutUserThunk());
  };
  return (
    <UserMenuStyled>
      {isAuth ? (
        <LogoutContStyled>
          <p>{userEmail}</p>
          <Button type="button" onClick={handleLogOut}>
            Logout
          </Button>
        </LogoutContStyled>
      ) : (
        <LoginContStyled>
          <LogLinkStyled to={'/login'}>Login</LogLinkStyled>
          <LogLinkStyled to={'/register'}>Registration</LogLinkStyled>
        </LoginContStyled>
      )}
    </UserMenuStyled>
  );
};
