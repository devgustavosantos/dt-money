import styled from 'styled-components';

import { Wrapper } from '@/components';
import { BREAKPOINTS } from '@/styles';
import { MagnifyingGlass } from '@phosphor-icons/react';

const SearchBarContainer = styled(Wrapper)`
  display: flex;
  align-items: center;
  gap: 16rem;
`;

const Input = styled.input`
  flex: 1 1 0;
  padding: 16rem;
  border-radius: 6rem;
  background-color: ${({ theme }) => theme.BASE_900};
  border: none;

  &::placeholder {
    color: ${({ theme }) => theme.BASE_500};
    font-size: 16rem;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 12rem;
  padding: 14rem 32rem;
  border: 1rem solid ${({ theme }) => theme.PRIMARY_700};
  border-radius: 6rem;
  color: ${({ theme }) => theme.PRIMARY_700};
  transition:
    color 0.4s,
    background-color 0.4s;

  &:hover {
    color: ${({ theme }) => theme.BASE_200};
    background-color: ${({ theme }) => theme.PRIMARY_700};
    filter: brightness(1);
  }

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    padding: 16rem;
  }
`;

const CustomMagnifyingGlass = styled(MagnifyingGlass)`
  font-size: 24rem;
`;

const ButtonText = styled.span`
  color: inherit;
  font-weight: 600;

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    display: none;
  }
`;

export { SearchBarContainer, Input, Button, CustomMagnifyingGlass, ButtonText };
