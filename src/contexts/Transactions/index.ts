import { createContext, useContext } from 'react';

import { TransactionsContextType } from './Transactions.types';

const TransactionsContext = createContext({} as TransactionsContextType);
const useTransactionsContext = () => useContext(TransactionsContext);

export { TransactionsContext, useTransactionsContext };
export { TransactionsProvider } from './Transactions.provider';
