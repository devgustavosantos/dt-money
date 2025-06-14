import { TransactionsContext } from '.';
import { useTransactions } from './Transactions.hook';
import { TransactionsProviderProps } from './Transactions.types';

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const {
    transactions,
    isTransactionsLoading,
    transactionsError,
    createTransaction,
  } = useTransactions();

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        isTransactionsLoading,
        transactionsError,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
