import { Error } from '@/styles';
import { DICTIONARY } from '@/utils';

import { useTransactionsTable } from './TransactionsTable.hook';
import * as S from './TransactionsTable.styles';

export function TransactionsTable() {
  const { formattedTransactions, transactionsError, isTransactionsLoading } =
    useTransactionsTable();

  return (
    <S.TransactionsTableContainer isLoading={isTransactionsLoading}>
      {isTransactionsLoading && <S.TransactionsSpinner />}
      {!isTransactionsLoading && !!formattedTransactions.length && (
        <S.Table>
          <S.Body>
            {formattedTransactions.map(
              ({ id, description, price, category, type, createdAt }) => (
                <S.Row key={id}>
                  <S.Description>{description}</S.Description>
                  <S.Amount type={type}>
                    {type === 'outcome' && '- '}
                    {price}
                  </S.Amount>
                  <S.Category>
                    <S.CustomTagSimple />
                    {category}
                  </S.Category>
                  <S.Date>
                    <S.CustomCalendarBlank />
                    {createdAt}
                  </S.Date>
                </S.Row>
              ),
            )}
          </S.Body>
        </S.Table>
      )}
      {!isTransactionsLoading && !formattedTransactions.length && (
        <S.NoTransactions>{DICTIONARY.NO_TRANSACTIONS}</S.NoTransactions>
      )}
      {!isTransactionsLoading && transactionsError && (
        <Error>{transactionsError}</Error>
      )}
    </S.TransactionsTableContainer>
  );
}
