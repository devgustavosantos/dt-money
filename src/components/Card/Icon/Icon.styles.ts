import styled from 'styled-components';

import { IconContainerProps } from './Icon.types';

export const IconContainer = styled.svg<IconContainerProps>`
  font-size: 32rem;
  color: ${({ theme, variant }) => theme[variant]};
  transform: translateX(4rem);
`;
