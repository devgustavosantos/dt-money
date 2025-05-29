import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';

export function useAuthentication() {
  const [userInfos, setUserInfos] = useState<User | null>(null);

  useEffect(() => {
    setUserInfos(null);
  }, []);

  return {
    userInfos,
  };
}
