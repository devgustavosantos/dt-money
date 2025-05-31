import styled from 'styled-components';

import { CircleNotch } from '@phosphor-icons/react';

export const Spinner = styled(CircleNotch)`
  font-size: 24rem;
  color: ${({ theme }) => theme.BASE_200};
  display: block;
  animation: spin 0.4s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
