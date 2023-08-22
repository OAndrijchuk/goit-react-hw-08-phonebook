import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const UserMenuStyled = styled.header`
  display: flex;
  gap: 30px;
`;
export const LogoutContStyled = styled.div`
  display: flex;
  gap: 30px;
`;
export const LoginContStyled = styled.div`
  display: flex;
  gap: 30px;
`;
export const LogLinkStyled = styled(Link)`
  text-decoration: none;
  display: block;
  cursor: pointer;
  position: relative;
  padding: 10px 20px;
  font-weight: 600;
  letter-spacing: 2px;
  color: #fff;
  transition: all 0.2s ease-in;
  &:hover {
    color: rgb(61, 106, 255);
  }
`;
