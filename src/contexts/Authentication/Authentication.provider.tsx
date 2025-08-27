import { useAuthentication } from './Authentication.hook';
import { AuthenticationProviderProps } from './Authentication.types';
import { AuthenticationContext } from './index';

export function AuthenticationProvider({
  children,
}: AuthenticationProviderProps) {
  const { userInfos, isUserAuthenticated } = useAuthentication();

  return (
    <AuthenticationContext.Provider value={{ isUserAuthenticated, userInfos }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
