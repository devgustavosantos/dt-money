import { collection, serverTimestamp, addDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useAuthenticationContext, useTransactionsContext } from '@/contexts';
import { db } from '@/services';
import { CONSTANTS, DICTIONARY } from '@/utils';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  newTransactionFormValidationSchema,
  NewTransactionFormInputs,
} from './NewTransaction.types';

export function useNewTransaction() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const { createTransaction } = useTransactionsContext();
  const { userInfos } = useAuthenticationContext();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isDirty, isSubmitSuccessful },
    reset,
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormValidationSchema),
    delayError: 3000,
  });

  async function onSubmit({
    description,
    price,
    category,
    type,
  }: NewTransactionFormInputs) {
    if (!userInfos) return;

    setMessage('');

    setIsLoading(true);

    const newRegister = await addDoc(
      collection(db, CONSTANTS.TRANSACTION_COLLECTION_NAME),
      {
        userId: userInfos.uid,
        createdAt: serverTimestamp(),
        type,
        description,
        price,
        category,
      },
    ).catch((error) => {
      console.warn('>>> newRegister error', error);

      setMessage(DICTIONARY.REQUEST_ERROR);
    });

    setIsLoading(false);

    if (!newRegister) return;

    createTransaction({
      id: newRegister.id,
      createdAt: new Date(),
      type,
      description,
      price,
      category,
    });
    setMessage(DICTIONARY.NEW_TRANSACTION_SUCCESS);
  }

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  const messageRendered = isDirty ? '' : message;

  return {
    onSubmit,
    isLoading,
    register,
    handleSubmit,
    control,
    errors,
    messageRendered,
  };
}
