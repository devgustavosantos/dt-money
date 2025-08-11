import { Transaction } from '@/types';

interface TransactionsTableProps {
  transactionsToDisplay: Transaction[];
}

interface TransactionsTableContainerProps {
  isLoading: boolean;
}

export type { TransactionsTableProps, TransactionsTableContainerProps };
