import { User, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

import { auth } from '@/services';

export function useAuthentication() {
  const [userInfos, setUserInfos] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserInfos(user);
    });
  }, []);

  return {
    userInfos,
  };
}
