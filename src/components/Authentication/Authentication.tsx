import { SignIn, SignOut } from '@/components/';
import { useAuthenticationContext } from '@/contexts';

export function Authentication() {
  const { isUserAuthenticated } = useAuthenticationContext();

  return isUserAuthenticated ? <SignOut /> : <SignIn />;
}
