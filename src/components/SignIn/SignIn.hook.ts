import { sendSignInLinkToEmail } from 'firebase/auth';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useAuthenticationContext } from '@/contexts';
import { actionCodeSettings, auth } from '@/services';
import { CONSTANTS, DICTIONARY } from '@/utils';
import { zodResolver } from '@hookform/resolvers/zod';

import { signInFormSchema, SignInFormType } from './SignIn.types';

export function useSignIn() {
  const [requestError, setRequestError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { handleLinkSent } = useAuthenticationContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormType>({
    resolver: zodResolver(signInFormSchema),
  });

  function onSubmit(data: SignInFormType) {
    setIsLoading(true);

    sendSignInLinkToEmail(auth, data.email, actionCodeSettings)
      .then(() => {
        handleLinkSent(true);

        setRequestError('');

        window.localStorage.setItem(CONSTANTS.EMAIL_KEY, data.email);
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
