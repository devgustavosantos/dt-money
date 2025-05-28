import styled from 'styled-components';

import { BREAKPOINTS } from '@/styles';
import { SignOut } from '@phosphor-icons/react';

const ButtonsContainer = styled.div`
  margin-top: 16rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8rem;
`;

const SignOutButton = styled.button`
  height: 56rem;
  width: 56rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.SECONDARY_800};
  display: grid;
  place-items: center;
  position: fixed;
  right: 48rem;
  bottom: 48rem;
  box-shadow: 0 0 8px 0px ${({ theme }) => theme.BASE_900};

  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    height: 48rem;
    width: 48rem;
    right: 24rem;
    bottom: 24rem;
  }
`;

const CustomSignOut = styled(SignOut)`
  font-size: 24rem;
  color: ${({ theme }) => theme.BASE_200};

  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    font-size: 20rem;
  }
`;

export { ButtonsContainer, SignOutButton, CustomSignOut };
