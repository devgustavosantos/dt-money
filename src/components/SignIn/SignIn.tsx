import { FormModal } from '@/components';
import { DICTIONARY } from '@/utils';

import { useSignIn } from './SignIn.hook';

export function SignIn() {
  const { handleSignIn } = useSignIn();

  return (
    <FormModal
      handleFormSubmit={handleSignIn}
      title={DICTIONARY.WELCOME}
      description={DICTIONARY.WELCOME_DESCRIPTION}
      actionText={DICTIONARY.SEND}
    />
  );
}
