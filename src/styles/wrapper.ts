import styled from 'styled-components';

import { BREAKPOINTS } from './breakpoints';

export const Wrapper = styled.div`
  max-width: 1152rem;
  padding-inline: 16rem;
  margin: auto;

  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    padding-inline: 24rem;
  }
`;
