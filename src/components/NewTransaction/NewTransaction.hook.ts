import { collection, serverTimestamp, addDoc } from 'firebase/firestore';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useAuthenticationContext } from '@/contexts';
import { auth, db } from '@/services';
import { DICTIONARY } from '@/utils';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  newTransactionFormValidationSchema,
  NewTransactionFormInputs,
} from './NewTransaction.types';

export function useNewTransaction() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const { removeUserAuthentication } = useAuthenticationContext();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormValidationSchema),
  });

  async function onSubmit({
    description,
    price,
    category,
    type,
  }: NewTransactionFormInputs) {
    const { currentUser } = auth;
    setMessage('');

    if (!currentUser) {
      removeUserAuthentication();

      return;
    }

    setIsLoading(true);

    const newRegister = await addDoc(collection(db, 'transactions'), {
      userId: currentUser.uid,
      createdAt: serverTimestamp(),
      type,
      description,
      price,
      category,
    }).catch((error) => {
      console.info('>>> newRegister error', error);

      setMessage(DICTIONARY.REQUEST_ERROR);
    });

    setIsLoading(false);

    if (!newRegister) return;

    setMessage(DICTIONARY.NEW_TRANSACTION_SUCCESS);

    reset();
  }

  return {
    onSubmit,
    isLoading,
    register,
    handleSubmit,
    control,
    errors,
    message,
  };
}
