import { Button, Modal } from '@/components';
import { useAuthenticationContext } from '@/contexts';
import { DICTIONARY } from '@/utils';
import * as Dialog from '@radix-ui/react-dialog';

import { useSignOut } from './SignOut.hook';
import * as S from './SignOut.styles';

export function SignOut() {
  const { userInfos } = useAuthenticationContext();
  const { handleSignOut } = useSignOut();

  if (!userInfos) return null;

  return (
    <Modal
      content={
        <S.ButtonsContainer>
          <Dialog.Close asChild>
            <Button
              variant="large"
              onClick={handleSignOut}
            >
              {DICTIONARY.CONFIRM}
            </Button>
          </Dialog.Close>
          <Dialog.Close asChild>
            <Button
              variant="large"
              isMuted
              autoFocus
            >
              {DICTIONARY.CANCEL}
            </Button>
          </Dialog.Close>
        </S.ButtonsContainer>
      }
      title={DICTIONARY.ARE_YOU_SURE}
      description={DICTIONARY.ARE_YOU_SURE_DESCRIPTION}
      trigger={
        <S.SignOutButton title={DICTIONARY.LOGOUT}>
          <S.CustomSignOut />
        </S.SignOutButton>
      }
      isLarge={false}
    />
  );
}
