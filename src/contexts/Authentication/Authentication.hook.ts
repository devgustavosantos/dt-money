import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { useEffect, useState } from 'react';

import { AllowedSteps } from '@/types';
import { CONSTANTS } from '@/utils';

import { StepType } from './Authentication.types';
import { CURRENT_STEP_KEY } from './Authentication.utils';

export function useAuthentication() {
  const [currentStep, setCurrentStep] = useState<StepType>(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const triedToLogIn = urlParams.get(CONSTANTS.LOGGED_IN_PARAM);

    if (triedToLogIn) {
      window.localStorage.setItem(CURRENT_STEP_KEY, AllowedSteps.CONFIRM);

      return AllowedSteps.CONFIRM;
    }

    const stepInStorage = window.localStorage.getItem(CURRENT_STEP_KEY);

    const stepFound = Object.values(AllowedSteps).find(
      (step) => step === stepInStorage,
    );

    return stepFound ?? AllowedSteps.WELCOME;
  });
  const [userInfos, setUserInfos] = useState<User | null>(null);

  function handleCurrentStep(step: StepType) {
    setCurrentStep(step);

    window.localStorage.setItem(CURRENT_STEP_KEY, step);
  }

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(
      auth,
      (user) => {
        if (!user) {
          handleCurrentStep(AllowedSteps.WELCOME);

          setUserInfos(null);

          window.localStorage.clear();

          return;
        }

        handleCurrentStep(AllowedSteps.LOGGED_IN);

        setUserInfos(user);

        const url = new URL(window.location.href);
        history.pushState({}, '', url.pathname);
      },
      (error) => {
        console.info('>>> error', error);
      },
    );
  }, []);

  return {
    currentStep,
    handleCurrentStep,
    userInfos,
  };
}
