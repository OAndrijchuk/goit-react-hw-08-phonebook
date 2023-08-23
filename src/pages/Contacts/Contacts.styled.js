import styled from 'styled-components';
import bg from '../../image/bg.jpg';
export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 35px;
  height: calc(100vh - 80px);
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  padding: 25px;
`;
