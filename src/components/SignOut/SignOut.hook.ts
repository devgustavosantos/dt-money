import { signOut } from 'firebase/auth';
import { useState } from 'react';

import { useTransactionsContext } from '@/contexts';
import { auth } from '@/services';
import { handlePromises } from '@/utils';

export function useSignOut() {
  const [isLoading, setIsLoading] = useState(false);

  const { resetTransactions } = useTransactionsContext();

  async function handleSignOut() {
    window.scrollTo(0, 0);

    setIsLoading(true);

    resetTransactions();

    const { error } = await handlePromises(signOut, auth);

    setIsLoading(false);

    if (!error) return;

    console.warn('>>> handleSignOut error:', error);
  }

  return { handleSignOut, isLoading };
}
