import { Button } from 'components/Form/SimpleForm.styled';
import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: space-between;
  margin-bottom: 10px;
`;
export const Doters = styled.div`
  flex-grow: 1;
  align-self: center;
  height: 100%;
  border-bottom: 3px dotted black;
`;
export const DelButton = styled(Button)`
  &:hover {
    background: red;
    box-shadow: 0 0 30px 5px rgba(0, 142, 236, 0.815);
    -webkit-transition: all 0.2s ease-out;
    -moz-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
  }
`;
