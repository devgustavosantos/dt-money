import { useState } from 'react';

import {
  AuthenticationProviderProps,
  StepsAllowed,
} from './Authentication.types';
import { AuthenticationContext } from './index';

export function AuthenticationProvider({
  children,
}: AuthenticationProviderProps) {
  const [currentStep, setCurrentStep] = useState<StepsAllowed>('welcome');

  function handleCurrentStep(step: StepsAllowed) {
    setCurrentStep(step);
  }

  return (
    <AuthenticationContext.Provider value={{ currentStep, handleCurrentStep }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
