import { formats } from '@/utils/formats';

import { transactionsExample } from './TransactionsTable.data';

export function useTransactionsTable() {
  const formattedTransactions = transactionsExample.map((transaction) => ({
    ...transaction,
    date: formats.date.format(new Date(transaction.date)),
    amount: formats.money.format(transaction.amount),
  }));

  return { formattedTransactions };
}
