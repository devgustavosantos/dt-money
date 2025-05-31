import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

import { auth } from '@/services';
import { others } from '@/utils';

export function useAuthentication() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState<boolean>(
    () => {
      const savedInfo = localStorage.getItem(others.IS_AUTHENTICATED);

      if (!savedInfo) return false;

      return !!JSON.parse(savedInfo);
    },
  );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsUserAuthenticated(!!user);

      localStorage.setItem(others.IS_AUTHENTICATED, `${!!user}`);
    });
  }, []);

  return {
    isUserAuthenticated,
  };
}
