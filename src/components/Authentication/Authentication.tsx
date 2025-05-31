import { SignIn, SignOut } from '@/components/';
import { useAuthenticationContext } from '@/contexts';

export function Authentication() {
  const { userInfos } = useAuthenticationContext();

  return userInfos ? <SignOut /> : <SignIn />;
}
