import { SignIn, LinkSent } from '@/components';
import { useAuthenticationContext } from '@/contexts';

export function Authentication() {
  const { currentStep } = useAuthenticationContext();

  if (currentStep === 'send') return <LinkSent />;

  return <SignIn />;
}
