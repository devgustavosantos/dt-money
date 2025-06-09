import { useAuthentication } from './Authentication.hook';
import { AuthenticationProviderProps } from './Authentication.types';
import { AuthenticationContext } from './index';

export function AuthenticationProvider({
  children,
}: AuthenticationProviderProps) {
  const { isUserAuthenticated, removeUserAuthentication } = useAuthentication();

  return (
    <AuthenticationContext.Provider
      value={{ isUserAuthenticated, removeUserAuthentication }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}
