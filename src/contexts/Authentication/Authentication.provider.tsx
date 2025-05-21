import { useState } from 'react';

import {
  AuthenticationProviderProps,
  AllowedSteps,
} from './Authentication.types';
import { allowedSteps, CURRENT_STEP_KEY } from './Authentication.utils';
import { AuthenticationContext } from './index';

export function AuthenticationProvider({
  children,
}: AuthenticationProviderProps) {
  const [currentStep, setCurrentStep] = useState<AllowedSteps>(() => {
    const stepInStorage = window.localStorage.getItem(CURRENT_STEP_KEY);

    const stepFound = allowedSteps.find(
      (allowedStep) => allowedStep === stepInStorage,
    );

    return stepFound ? stepFound : 'welcome';
  });

  function handleCurrentStep(step: AllowedSteps) {
    setCurrentStep(step);

    window.localStorage.setItem(CURRENT_STEP_KEY, step);
  }

  return (
    <AuthenticationContext.Provider value={{ currentStep, handleCurrentStep }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
