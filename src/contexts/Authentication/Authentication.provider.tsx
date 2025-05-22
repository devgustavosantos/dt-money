import { useState } from 'react';

import { AllowedSteps } from '@/types';

import { AuthenticationProviderProps, StepType } from './Authentication.types';
import { CURRENT_STEP_KEY } from './Authentication.utils';
import { AuthenticationContext } from './index';

export function AuthenticationProvider({
  children,
}: AuthenticationProviderProps) {
  const [currentStep, setCurrentStep] = useState<StepType>(() => {
    const stepInStorage = window.localStorage.getItem(CURRENT_STEP_KEY);

    const stepFound = Object.values(AllowedSteps).find(
      (step) => step === stepInStorage,
    );

    return stepFound ? stepFound : AllowedSteps.WELCOME;
  });

  function handleCurrentStep(step: StepType) {
    setCurrentStep(step);

    window.localStorage.setItem(CURRENT_STEP_KEY, step);
  }

  return (
    <AuthenticationContext.Provider value={{ currentStep, handleCurrentStep }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
