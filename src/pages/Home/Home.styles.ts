import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import { z } from 'zod';

import { SearchBar, Wrapper } from '@/components';
import { BREAKPOINTS } from '@/styles';

const paginationClassNames = z.enum([
  'page',
  'pageLink',
  'active',
  'previousLink',
  'nextLink',
]).enum;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  padding-bottom: 40rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const HomeSearchBar = styled(SearchBar)`
  margin: 12rem auto 24rem;
  width: 100%;

  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    margin: 12rem auto;
  }
`;

const Transactions = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  margin: 64rem auto 12rem;
  width: 100%;

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

const CustomReactPaginate = styled(ReactPaginate)`
  margin: 40rem auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16rem;

  .${paginationClassNames.page} {
    border-radius: 6rem;
    background-color: ${({ theme }) => theme.BASE_600};
    display: grid;
    place-items: center;
    transition: filter 0.4s;

    &:hover {
      filter: brightness(1.4);
    }
  }

  .${paginationClassNames.pageLink} {
    min-width: 40rem;
    height: 40rem;
    padding-inline: 8rem;
    font-weight: 600;
    display: grid;
    place-items: center;
  }

  .${paginationClassNames.active} {
    background-color: ${({ theme }) => theme.PRIMARY_900};
    color: ${({ theme }) => theme.BASE_100};
  }

  .${paginationClassNames.previousLink}, .${paginationClassNames.nextLink} {
    display: grid;
    place-items: center;
    font-size: 24rem;
    color: ${({ theme }) => theme.BASE_600};

    &[aria-disabled='true'] {
      color: ${({ theme }) => theme.BASE_600};
    }
  }
`;

export {
  HomeContainer,
  Main,
  HomeSearchBar,
  Transactions,
  TransactionsLabel,
  TransactionsNumber,
  CustomReactPaginate,
  paginationClassNames,
};
