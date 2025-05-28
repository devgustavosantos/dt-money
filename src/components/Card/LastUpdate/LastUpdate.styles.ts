import styled from 'styled-components';

import { CardProps } from '../Card.types';

export const LastUpdateContainer = styled.p<CardProps>`
  margin-top: 2rem;
  color: ${({ theme, isHighlighted }) =>
    isHighlighted ? theme.BASE_400 : theme.BASE_500};
  font-size: 14rem;
`;
