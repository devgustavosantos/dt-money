import { getAuth, signOut } from 'firebase/auth';

import { useAuthenticationContext } from '@/contexts';
import { AllowedSteps } from '@/types';

export function useSignOut() {
  const auth = getAuth();
  const { handleCurrentStep } = useAuthenticationContext();

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        handleCurrentStep(AllowedSteps.WELCOME);

        window.localStorage.clear();
      })
      .catch((error) => {
        console.info('>>> error', error);
      });
  }

  return { handleSignOut };
}
