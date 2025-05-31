import { useAuthentication } from './Authentication.hook';
import { AuthenticationProviderProps } from './Authentication.types';
import { AuthenticationContext } from './index';

export function AuthenticationProvider({
  children,
}: AuthenticationProviderProps) {
  const { userInfos } = useAuthentication();

  return (
    <AuthenticationContext.Provider value={{ userInfos }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
