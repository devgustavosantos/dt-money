import { User } from 'firebase/auth';

import { AllowedSteps } from '@/types';

interface AuthenticationProviderProps {
  children: React.ReactNode;
}

type StepType = keyof typeof AllowedSteps;

interface AuthenticationContextType {
  currentStep: StepType;
  handleCurrentStep: (step: StepType) => void;
  userInfos: User | null;
}

export type {
  AuthenticationProviderProps,
  AuthenticationContextType,
  StepType,
};
