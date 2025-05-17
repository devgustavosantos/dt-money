import { sendSignInLinkToEmail } from 'firebase/auth';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { actionCodeSettings, auth } from '@/services';
import { DICTIONARY } from '@/utils';
import { zodResolver } from '@hookform/resolvers/zod';

import { signInFormSchema, SignInFormType } from './SignIn.types';

export function useSignIn() {
  const [requestError, setRequestError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormType>({
    resolver: zodResolver(signInFormSchema),
  });

  function onSubmit(data: SignInFormType) {
    sendSignInLinkToEmail(auth, data.email, actionCodeSettings)
      .then(() => {
        console.log('>>> link sent');
      })
      .catch((error) => {
        setRequestError(DICTIONARY.REQUEST_ERROR);

        console.info('>>> error', error);
      });
  }

  const error = requestError || errors.email?.message;

  return { onSubmit, register, handleSubmit, error };
}
