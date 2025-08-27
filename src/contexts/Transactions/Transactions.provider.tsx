import { TransactionsContext } from '.';
import { useTransactions } from './Transactions.hook';
import { TransactionsProviderProps } from './Transactions.types';

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const {
    transactions,
    isTransactionsLoading,
    transactionsError,
    searchTerm,
    createTransaction,
    resetTransactions,
    handleSearchTerm,
    filteredTransactions,
  } = useTransactions();

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        isTransactionsLoading,
        transactionsError,
        searchTerm,
        filteredTransactions,
        createTransaction,
        resetTransactions,
        handleSearchTerm,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
