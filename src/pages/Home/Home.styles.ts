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
  SummaryContainer,
  SummaryContent,
  HomeSearchBar,
  Transactions,
  TransactionsLabel,
  TransactionsNumber,
};
