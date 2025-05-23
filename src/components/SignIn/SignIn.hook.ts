import { sendSignInLinkToEmail } from 'firebase/auth';

import { useAuthenticationContext } from '@/contexts';
import { actionCodeSettings, auth } from '@/services';
import { AllowedSteps, FormModalType } from '@/types';
import { CONSTANTS } from '@/utils';

export function useSignIn() {
  const { handleCurrentStep } = useAuthenticationContext();

  const handleSignIn = ({ email }: FormModalType) =>
    sendSignInLinkToEmail(auth, email, actionCodeSettings).then(() => {
      window.localStorage.setItem(CONSTANTS.EMAIL_KEY, email);

      handleCurrentStep(AllowedSteps.SEND);
    });

  return { handleSignIn };
}
