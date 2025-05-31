interface AuthenticationProviderProps {
  children: React.ReactNode;
}

interface AuthenticationContextType {
  isUserAuthenticated: boolean;
}

export type { AuthenticationProviderProps, AuthenticationContextType };
