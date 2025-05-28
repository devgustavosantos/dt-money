import React from 'react';

import { SignIn, LinkSent, LoggedIn, Confirm } from '@/components';
import { useAuthenticationContext } from '@/contexts';
import { AllowedSteps } from '@/types';

export function useAuthentication() {
  const { currentStep } = useAuthenticationContext();

  const stepsToBeRender: Record<AllowedSteps, React.FC> = {
    WELCOME: SignIn,
    SEND: LinkSent,
    CONFIRM: Confirm,
    LOGGED_IN: LoggedIn,
  };

  const StepToRender = stepsToBeRender[currentStep] ?? SignIn;

  return { StepToRender };
}
