import styled from 'styled-components';

import { Button, Wrapper } from '@/components';
import { BREAKPOINTS } from '@/styles';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.BASE_900};
`;

const HeaderWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 44.5rem;

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    padding-block: 40rem;
  }
`;

const Logo = styled.img`
  width: 172rem;
  aspect-ratio: 172/41;

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    width: 117rem;
  }
`;

const NewTransactionButton = styled(Button)`
  max-width: 152rem;

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    max-width: 130rem;
  }
`;

export { HeaderContainer, HeaderWrapper, Logo, NewTransactionButton };
