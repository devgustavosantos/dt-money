import { signOut } from 'firebase/auth';

import { auth } from '@/services';

export function useSignOut() {
  function handleSignOut() {
    signOut(auth).catch((error) => {
      console.info('>>> handleSignOut error:', error);
    });
  }

  return { handleSignOut };
}
