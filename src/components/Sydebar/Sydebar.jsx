import React from 'react';
import { HeaderStyled, NavLinkStyled, NavStyled } from './Sydebar.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Sydebar = () => {
  return (
    <HeaderStyled>
      <NavStyled>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
      </NavStyled>
      <UserMenu />
    </HeaderStyled>
  );
};
