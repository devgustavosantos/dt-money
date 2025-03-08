import styled from 'styled-components';

import { Wrapper } from '@/components';
import { BREAKPOINTS } from '@/styles';

const SummaryContainer = styled.div`
  position: relative;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 50%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 9;
    background-color: ${({ theme }) => theme.BASE_900};
  }
`;

const SummaryContent = styled(Wrapper)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32rem;
  position: relative;
  z-index: 99;
  overflow-x: auto;

  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    gap: 16rem;
  }

  @media (pointer: coarse) {
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export { SummaryContainer, SummaryContent };
