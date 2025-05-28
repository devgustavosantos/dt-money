import { isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import { useCallback, useEffect } from 'react';

import { useAuthenticationContext } from '@/contexts';
import { auth } from '@/services';
import { AllowedSteps, FormModalType } from '@/types';
import { CONSTANTS } from '@/utils';

export function useConfirm() {
  const { handleCurrentStep } = useAuthenticationContext();

  const isALoginAttempt = isSignInWithEmailLink(auth, window.location.href);

  const emailSaved = window.localStorage.getItem(CONSTANTS.EMAIL_KEY);

  const shouldModalVisible = isALoginAttempt && !emailSaved;

  const handleConfirm = useCallback(({ email }: FormModalType) => {
    return signInWithEmailLink(auth, email, window.location.href)
      .then(() => {
        handleCurrentStep(AllowedSteps.LOGGED_IN);

        window.localStorage.removeItem(CONSTANTS.EMAIL_KEY);

        const url = new URL(window.location.href);
        history.pushState({}, '', url.pathname);
      })
      .catch((error) => {
        console.info('>>> error', error);
      });
  }, []);

  useEffect(() => {
    if (!emailSaved) return;

    handleConfirm({ email: emailSaved });
  }, [handleConfirm, emailSaved]);

  return { handleConfirm, shouldModalVisible };
}
