import { useTransactionsContext } from '@/contexts';
import { formats } from '@/utils';

export function useTransactionsTable() {
  const { transactions, transactionsError, isTransactionsLoading } =
    useTransactionsContext();

  const formattedTransactions = transactions.map((transaction) => ({
    ...transaction,
    createdAt: formats.date.format(new Date(transaction.createdAt)),
    price: formats.money.format(transaction.price / 100),
  }));

  const shouldRenderTable =
    !isTransactionsLoading && !!formattedTransactions.length;
  const shouldRenderNoTransactions =
    !isTransactionsLoading && !formattedTransactions.length;
  const shouldRenderTransactionsError =
    !isTransactionsLoading && transactionsError;

  return {
    formattedTransactions,
    transactionsError,
    isTransactionsLoading,
    shouldRenderTable,
    shouldRenderNoTransactions,
    shouldRenderTransactionsError,
  };
}
