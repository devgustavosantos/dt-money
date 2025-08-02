import styled from 'styled-components';

import { Wrapper } from '@/components';
import { BREAKPOINTS } from '@/styles';
import { MagnifyingGlass, X } from '@phosphor-icons/react';

import { SearchButtonProps } from './SearchBar.types';

const SearchBarContainer = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  gap: 16rem;
`;

const SearchEntries = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
  gap: 16rem;

  &:has(:nth-child(3)) {
    grid-template-columns: 1fr auto auto;
  }
`;

const Button = styled.button<SearchButtonProps>`
  display: flex;
  align-items: center;
  gap: 12rem;
  padding: 14rem 32rem;
  border: 1rem solid
    ${({ theme, variant }) =>
    variant === 'search' ? theme.PRIMARY_700 : theme.SECONDARY_800};
  border-radius: 6rem;
  color: ${({ theme, variant }) =>
    variant === 'search' ? theme.PRIMARY_700 : theme.SECONDARY_800};
  transition:
    color 0.4s,
    background-color 0.4s;

  &:not(:disabled)&:hover {
    color: ${({ theme }) => theme.BASE_200};
    background-color: ${({ theme, variant }) =>
    variant === 'search' ? theme.PRIMARY_700 : theme.SECONDARY_800};
    filter: brightness(1);
  }

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    padding: 16rem;
  }
`;

const CustomMagnifyingGlass = styled(MagnifyingGlass)`
  font-size: 24rem;
`;

const CustomX = styled(X)`
  font-size: 24rem;
`;

const ButtonText = styled.span`
  color: inherit;
  font-weight: 600;

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    display: none;
  }
`;

export {
  SearchBarContainer,
  SearchEntries,
  Button,
  CustomMagnifyingGlass,
  CustomX,
  ButtonText,
};
