import styled from 'styled-components';

import { BREAKPOINTS } from '@/styles';

export const ValueContainer = styled.strong`
  font-size: 32rem;
  font-weight: 600;
  line-height: 140%;
  color: ${({ theme }) => theme.BASE_300};

  @media only screen and (max-width: ${BREAKPOINTS.LARGE}) {
    display: block;
    font-size: 24rem;
    margin-top: 12rem;
  }
`;
