import { onAuthStateChanged, User } from 'firebase/auth';
import { useEffect, useState } from 'react';

import { auth } from '@/services';
import { others } from '@/utils';

export function useAuthentication() {
  const [userInfos, setUserInfos] = useState<User | null>(null);

  const isUserAuthenticated = (() => {
    const savedInfo = localStorage.getItem(others.IS_AUTHENTICATED);

    return !savedInfo && !userInfos ? false : true;
  })();

  useEffect(() => {
    const unregisterAuthObserver = onAuthStateChanged(auth, (user) => {
      setUserInfos(user);

      if (!user) {
        localStorage.removeItem(others.IS_AUTHENTICATED);

        return;
      }

      localStorage.setItem(others.IS_AUTHENTICATED, 'true');
    });

    return () => unregisterAuthObserver();
  }, []);

  return {
    userInfos,
    isUserAuthenticated,
  };
}
