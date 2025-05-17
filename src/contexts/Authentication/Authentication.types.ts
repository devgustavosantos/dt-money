interface AuthenticationProviderProps {
  children: React.ReactNode;
}

interface AuthenticationContextType {
  linkSent: boolean;
  handleLinkSent: (linkSent: boolean) => void;
}

export type { AuthenticationProviderProps, AuthenticationContextType };
