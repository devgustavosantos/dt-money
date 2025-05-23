import { SignIn, LinkSent } from '@/components';
import { useAuthenticationContext } from '@/contexts';
import { AllowedSteps } from '@/types';

export function Authentication() {
  const { currentStep } = useAuthenticationContext();

  if (currentStep === AllowedSteps.SEND) return <LinkSent />;

  return <SignIn />;
}
