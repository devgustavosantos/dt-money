import { useState } from 'react';

import { signInWithGooglePopup } from '@/services';
import { DICTIONARY, handlePromises } from '@/utils';

export function useSignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSignIn() {
    setIsLoading(true);

    const { error } = await handlePromises(signInWithGooglePopup);

    setIsLoading(false);

    if (!error) return;

    setErrorMessage(DICTIONARY.REQUEST_ERROR);

    console.warn('>>> handleSignIn error:', error);
  }

  return { handleSignIn, isLoading, errorMessage };
}
