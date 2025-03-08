import styled from 'styled-components';

import { SearchBar, Wrapper } from '@/components';
import { BREAKPOINTS } from '@/styles';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  padding-bottom: 40rem;
  flex: 1;
`;

const HomeSearchBar = styled(SearchBar)`
  margin: 12rem auto 24rem;

  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    margin: 12rem auto;
  }
`;

const Transactions = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  margin: 64rem auto 12rem;

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    margin-top: 24rem;
  }
`;

const TransactionsLabel = styled.span`
  font-size: 18rem;
`;

const TransactionsNumber = styled.span`
  color: ${({ theme }) => theme.BASE_500};
`;

export {
  HomeContainer,
  Main,
  HomeSearchBar,
  Transactions,
  TransactionsLabel,
  TransactionsNumber,
};
