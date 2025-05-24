import { useAuthentication } from './Authentication.hook';
import { AuthenticationProviderProps } from './Authentication.types';
import { AuthenticationContext } from './index';

export function AuthenticationProvider({
  children,
}: AuthenticationProviderProps) {
  const { currentStep, handleCurrentStep } = useAuthentication();

  return (
    <AuthenticationContext.Provider value={{ currentStep, handleCurrentStep }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
