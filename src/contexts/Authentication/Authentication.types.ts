import { User } from 'firebase/auth';

interface AuthenticationProviderProps {
  children: React.ReactNode;
}

interface AuthenticationContextType {
  userInfos: User | null;
}

export type { AuthenticationProviderProps, AuthenticationContextType };
