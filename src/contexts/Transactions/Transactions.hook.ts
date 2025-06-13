import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { auth, db } from '@/services';
import { Transaction, transactionSchema } from '@/types';
import { CONSTANTS, DICTIONARY } from '@/utils';

import { useAuthenticationContext } from '../Authentication';
import { transactionsExample } from './Transactions.data';

export function useTransactions() {
  const { isUserAuthenticated, removeUserAuthentication } =
    useAuthenticationContext();

  const [transactions, setTransactions] = useState<Transaction[]>(() =>
    isUserAuthenticated ? [] : transactionsExample,
  );
  const [isTransactionsLoading, setIsTransactionsLoading] = useState(true);
  const [transactionsError, setTransactionsError] = useState('');

  useEffect(() => {
    const { currentUser } = auth;

    if (!currentUser) {
      removeUserAuthentication();

      return;
    }

    const transactionsQuery = query(
      collection(db, CONSTANTS.TRANSACTION_COLLECTION_NAME),
      where('userId', '==', currentUser.uid),
    );

    setIsTransactionsLoading(true);

    const unsubscribe = onSnapshot(
      transactionsQuery,
      (querySnapshot) => {
        setIsTransactionsLoading(false);

        const registers = querySnapshot.docs
          .map((doc) => {
            if (!doc.data().createdAt?.seconds) return;

            return {
              id: doc.id,
              ...doc.data(),
              createdAt: new Date(doc.data().createdAt.seconds * 1000),
            };
          })
          .filter((register) => !!register);

        const validatedRegisters = registers
          .map((register) => transactionSchema.safeParse(register).data)
          .filter((validatedRegister) => !!validatedRegister);

        if (validatedRegisters.length !== registers.length) {
          setTransactionsError(DICTIONARY.TRANSACTIONS_ERROR);
        }

        setTransactions(validatedRegisters);

        if (!isTransactionsLoading) return;

        setIsTransactionsLoading(false);
      },
      (error) => {
        console.info('>>> onSnapshot error', error);
      },
    );

    return () => unsubscribe();
  }, [isTransactionsLoading, removeUserAuthentication]);

  return {
    transactions,
    isTransactionsLoading,
    transactionsError,
  };
}
