import { useState } from 'react';

import {
  AuthenticationContextType,
  AuthenticationProviderProps,
} from './Authentication.types';
import { AuthenticationContext } from './index';

export function AuthenticationProvider({
  children,
}: AuthenticationProviderProps) {
  const [linkSent, setLinkSent] = useState(false);

  function handleLinkSent(linkSent: AuthenticationContextType['linkSent']) {
    setLinkSent(linkSent);
  }

  return (
    <AuthenticationContext.Provider value={{ linkSent, handleLinkSent }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
