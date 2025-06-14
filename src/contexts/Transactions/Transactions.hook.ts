import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { db } from '@/services';
import { Transaction, transactionSchema } from '@/types';
import { CONSTANTS, DICTIONARY } from '@/utils';

import { useAuthenticationContext } from '../Authentication';
import { transactionsExample } from './Transactions.data';

export function useTransactions() {
  const { userInfos, isUserAuthenticated } = useAuthenticationContext();

  const [transactions, setTransactions] = useState<Transaction[]>(() =>
    isUserAuthenticated ? [] : transactionsExample,
  );
  const [isTransactionsLoading, setIsTransactionsLoading] = useState(false);
  const [transactionsError, setTransactionsError] = useState('');

  function createTransaction(transaction: Transaction) {
    setTransactions((prevState) => [...prevState, transaction]);
  }

  useEffect(() => {
    async function getTransactions() {
      if (!userInfos) return;

      const transactionsQuery = query(
        collection(db, CONSTANTS.TRANSACTION_COLLECTION_NAME),
        where('userId', '==', userInfos.uid),
      );

      setIsTransactionsLoading(true);

      const querySnapshot = await getDocs(transactionsQuery).catch((error) => {
        console.info('>>> getTransactions error', error);
      });

      setIsTransactionsLoading(false);

      if (!querySnapshot) return;

      const registers = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        createdAt: new Date(doc.data().createdAt.seconds * 1000),
      }));

      const validatedRegisters = registers
        .map((register) => transactionSchema.safeParse(register).data)
        .filter((validatedRegister) => validatedRegister !== undefined);

      if (validatedRegisters.length !== registers.length) {
        setTransactionsError(DICTIONARY.TRANSACTIONS_ERROR);
      }

      setTransactions(validatedRegisters);
    }

    getTransactions();
  }, [userInfos]);

  return {
    transactions,
    isTransactionsLoading,
    transactionsError,
    createTransaction,
  };
}
