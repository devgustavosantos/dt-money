import { signInWithGooglePopup } from '@/services';

export function useSignIn() {
  function handleSignIn() {
    signInWithGooglePopup().catch((error) => {
      console.info('>>> handleSignIn error', error);
    });
  }

  return { handleSignIn };
}
