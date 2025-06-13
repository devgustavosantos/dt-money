import { Transaction } from '@/types';

interface TransactionsProviderProps {
  children: React.ReactNode;
}

interface TransactionsContextType {
  transactions: Transaction[];
  isTransactionsLoading: boolean;
  transactionsError: string;
  getTransactions: () => void;
}

export type { TransactionsProviderProps, TransactionsContextType };
