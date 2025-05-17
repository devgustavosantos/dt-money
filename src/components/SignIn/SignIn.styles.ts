import styled from 'styled-components';

import { CircleNotch } from '@phosphor-icons/react';

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12rem;
  margin-top: 12rem;
`;

const ErrorMessage = styled.p`
  font-size: 14rem;
  color: ${({ theme }) => theme.SECONDARY_800};
  filter: brightness(1.5);
`;

const CustomCircleNotch = styled(CircleNotch)`
  font-size: 24rem;
  color: ${({ theme }) => theme.BASE_200};

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

export { LoginForm, ErrorMessage, CustomCircleNotch };
