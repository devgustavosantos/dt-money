import styled from 'styled-components';

import { BREAKPOINTS } from '@/styles';

import { Wrapper } from '../Wrapper';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.BASE_900};
`;

const FooterWrapper = styled(Wrapper)`
  padding-block: 32rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    flex-direction: column;
    gap: 16rem;
  }
`;

const Logo = styled.img`
  width: 172rem;
  aspect-ratio: 172/41;

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    width: 117rem;
  }
`;

const Copyright = styled.small`
  color: ${({ theme }) => theme.BASE_400};
  font-size: 16rem;
  filter: brightness(0.9);

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    font-size: 14rem;
  }
`;

export { FooterContainer, FooterWrapper, Logo, Copyright };
