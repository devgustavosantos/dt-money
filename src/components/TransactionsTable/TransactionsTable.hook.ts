import { useTransactionsContext } from '@/contexts';
import { formats } from '@/utils';

import { TransactionsTableProps } from './TransactionsTable.types';

export function useTransactionsTable({
  transactionsToDisplay,
}: TransactionsTableProps) {
  const { transactionsError, isTransactionsLoading, searchTerm } =
    useTransactionsContext();

  const formattedTransactions = transactionsToDisplay.map((transaction) => ({
    ...transaction,
    createdAt: formats.date.format(new Date(transaction.createdAt)),
    price: formats.money.format(transaction.price / 100),
  }));

  const shouldRenderTable =
    !isTransactionsLoading && !!formattedTransactions.length;
  const shouldRenderNoTransactions =
    !isTransactionsLoading && !formattedTransactions.length && !searchTerm;
  const shouldRenderTransactionsError =
    !isTransactionsLoading && transactionsError;
  const shouldRenderNoTransactionsFounded =
    !isTransactionsLoading && !formattedTransactions.length && searchTerm;

  return {
    formattedTransactions,
    transactionsError,
    isTransactionsLoading,
    shouldRenderTable,
    shouldRenderNoTransactions,
    shouldRenderTransactionsError,
    shouldRenderNoTransactionsFounded,
  };
}
