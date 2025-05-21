interface AuthenticationProviderProps {
  children: React.ReactNode;
}

type StepsAllowed = 'welcome' | 'send' | 'loggedIn';

interface AuthenticationContextType {
  currentStep: StepsAllowed;
  handleCurrentStep: (step: StepsAllowed) => void;
}

export type {
  AuthenticationProviderProps,
  StepsAllowed,
  AuthenticationContextType,
};
