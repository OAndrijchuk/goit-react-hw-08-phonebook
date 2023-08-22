import { Suspense } from 'react';
import styled from 'styled-components';

export const NewSuspense = styled(Suspense)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid black;
  padding: 15px;
  background-color: red;
`;
