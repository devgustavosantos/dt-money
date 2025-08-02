import { Transaction } from '@/types';

interface TransactionsProviderProps {
  children: React.ReactNode;
}

interface TransactionsContextType {
  transactions: Transaction[];
  isTransactionsLoading: boolean;
  transactionsError: string;
  searchTerm: string;
  filteredTransactions: Transaction[];
  createTransaction: (transaction: Transaction) => void;
  resetTransactions: () => void;
  handleSearchTerm: (term: string) => void;
}

export type { TransactionsProviderProps, TransactionsContextType };
