import styled from 'styled-components';

import { BREAKPOINTS } from '@/styles';

import { RootProps } from './Root.types';

export const RootContainer = styled.article<RootProps>`
  padding: 24rem 32rem;
  background-color: ${({ theme, isHighlighted }) =>
    isHighlighted ? theme.PRIMARY_900 : theme.BASE_600};
  border-radius: 6rem;

  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    min-width: 280rem;
  }
`;
