interface AuthenticationProviderProps {
  children: React.ReactNode;
}

interface AuthenticationContextType {
  isUserAuthenticated: boolean;
  removeUserAuthentication: () => void;
}

export type { AuthenticationProviderProps, AuthenticationContextType };
