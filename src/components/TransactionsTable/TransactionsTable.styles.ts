import styled from 'styled-components';

import { Wrapper } from '@/components';
import { BREAKPOINTS, Spinner } from '@/styles';
import { TransactionType } from '@/types';
import { CalendarBlank, TagSimple } from '@phosphor-icons/react';

import { TransactionsTableContainerProps } from './TransactionsTable.types';

const TransactionsTableContainer = styled(
  Wrapper,
)<TransactionsTableContainerProps>`
  display: grid;
  place-items: center;

  ${({ isLoading }) => isLoading && 'flex-grow: 1;'};
`;

const Table = styled.table`
  display: block;
  width: 100%;
`;

const Body = styled.tbody`
  display: flex;
  flex-direction: column;
  gap: 8rem;
`;

const Row = styled.tr`
  display: grid;
  grid-template-columns:
    1fr clamp(120rem, 14vw, 200rem) clamp(150rem, 17vw, 240rem)
    120rem;
  padding: 20rem 32rem;
  border-radius: 5rem;
  background-color: ${({ theme }) => theme.BASE_700};

  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    grid-template-columns: 1fr 106rem;
    grid-template-areas:
      'A A'
      'B B'
      'C D';
    padding: 20rem;
    gap: 4rem;
  }
`;

const Description = styled.td`
  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    grid-area: A;
  }
`;

const Amount = styled.td<TransactionType>`
  color: ${({ theme, type }) =>
    type === 'income' ? theme.PRIMARY_700 : theme.SECONDARY_800};

  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    grid-area: B;
    font-size: 20rem;
    font-weight: 700;
    margin-bottom: 8rem;
  }
`;

const Category = styled.td`
  display: flex;
  align-items: center;
  gap: clamp(4rem, 0.6vw, 8rem);

  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    grid-area: C;
    color: ${({ theme }) => theme.BASE_500};
  }
`;

const CustomTagSimple = styled(TagSimple)`
  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    color: ${({ theme }) => theme.BASE_500};
  }
`;

const Date = styled(Category)`
  justify-content: flex-end;

  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    grid-area: D;
  }
`;

const CustomCalendarBlank = styled(CalendarBlank)`
  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    color: ${({ theme }) => theme.BASE_500};
  }
`;

const TransactionsSpinner = styled(Spinner)`
  margin: auto;
  font-size: 64rem;
`;

const NoTransactions = styled.p`
  font-size: 18rem;
`;

export {
  TransactionsTableContainer,
  Table,
  Body,
  Row,
  Description,
  Amount,
  Category,
  CustomTagSimple,
  Date,
  CustomCalendarBlank,
  TransactionsSpinner,
  NoTransactions,
};
