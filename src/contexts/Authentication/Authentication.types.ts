import { allowedSteps } from './Authentication.utils';

interface AuthenticationProviderProps {
  children: React.ReactNode;
}

type AllowedSteps = (typeof allowedSteps)[number];

interface AuthenticationContextType {
  currentStep: AllowedSteps;
  handleCurrentStep: (step: AllowedSteps) => void;
}

export type {
  AuthenticationProviderProps,
  AllowedSteps,
  AuthenticationContextType,
};
