import { isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import { useCallback, useEffect } from 'react';

import { auth } from '@/services';
import { FormModalType } from '@/types';
import { CONSTANTS } from '@/utils';

export function useConfirm() {
  const isALoginAttempt = isSignInWithEmailLink(auth, window.location.href);

  const emailSaved = window.localStorage.getItem(CONSTANTS.EMAIL_KEY);

  const shouldModalVisible = isALoginAttempt && !emailSaved;

  const handleConfirm = useCallback(({ email }: FormModalType) => {
    return signInWithEmailLink(auth, email, window.location.href).catch(
      (error) => {
        console.info('>>> error', error);
      },
    );
  }, []);

  useEffect(() => {
    if (!emailSaved) return;

    handleConfirm({ email: emailSaved });
  }, [handleConfirm, emailSaved]);

  return { handleConfirm, shouldModalVisible };
}
