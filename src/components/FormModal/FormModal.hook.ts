import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { FormModalType, signInFormSchema } from '@/types';
import { DICTIONARY } from '@/utils';
import { zodResolver } from '@hookform/resolvers/zod';

import { UseFormModalProps } from './FormModal.types';

export function useFormModal({ handleFormSubmit }: UseFormModalProps) {
  const [requestError, setRequestError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormModalType>({
    resolver: zodResolver(signInFormSchema),
  });

  function onSubmit(data: FormModalType) {
    setIsLoading(true);

    handleFormSubmit(data)
      .then(() => {
        setRequestError('');
      })
      .catch((error) => {
        setRequestError(DICTIONARY.REQUEST_ERROR);

        console.info('>>> error', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const error = requestError || errors.email?.message;

  return { onSubmit, register, handleSubmit, error, isLoading };
}
