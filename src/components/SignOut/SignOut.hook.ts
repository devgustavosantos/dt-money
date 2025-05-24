import { getAuth, signOut } from 'firebase/auth';

export function useSignOut() {
  const auth = getAuth();

  function handleSignOut() {
    signOut(auth).catch((error) => {
      console.info('>>> error', error);
    });
  }

  return { handleSignOut };
}
