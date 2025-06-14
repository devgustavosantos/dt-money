import { User } from 'firebase/auth';

interface AuthenticationProviderProps {
  children: React.ReactNode;
}

interface AuthenticationContextType {
  userInfos: User | null;
  isUserAuthenticated: boolean;
}

export type { AuthenticationProviderProps, AuthenticationContextType };
