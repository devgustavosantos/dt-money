import { SignIn, LinkSent } from '@/components';
import { useAuthenticationContext } from '@/contexts';

export function Authentication() {
  const { linkSent } = useAuthenticationContext();

  if (linkSent) return <LinkSent />;

  return <SignIn />;
}
