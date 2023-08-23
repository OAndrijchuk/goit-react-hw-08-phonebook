import styled from 'styled-components';
import bg from '../../image/bg.jpg';
import { NavLinkStyled } from 'components/Sydebar/Sydebar.styled';
export const HomeContStyled = styled.div`
  height: calc(100vh - 80px);
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  padding: 15px;
`;
export const SubContStyled = styled.div`
  width: 80%;
  padding: 100px 60px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const TitleStyled = styled.h1`
  font-size: calc((1vh + 1vw) * 4);
`;
export const HeroBtnStyled = styled(NavLinkStyled)`
  font-size: calc((1vh + 1vw) * 1);
  text-align: center;
  width: calc((1vh + 1vw) * 16);
  padding: 15px;
`;
