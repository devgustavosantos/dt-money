import { Transaction } from '@/types';

interface TransactionsProviderProps {
  children: React.ReactNode;
}

interface TransactionsContextType {
  transactions: Transaction[];
  isTransactionsLoading: boolean;
  transactionsError: string;
  createTransaction: (transaction: Transaction) => void;
  resetTransactions: () => void;
}

export type { TransactionsProviderProps, TransactionsContextType };
