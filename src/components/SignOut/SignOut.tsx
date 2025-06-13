import { Button, Modal } from '@/components';
import { DICTIONARY } from '@/utils';
import * as Dialog from '@radix-ui/react-dialog';

import { useSignOut } from './SignOut.hook';
import * as S from './SignOut.styles';

export function SignOut() {
  const { handleSignOut, isLoading } = useSignOut();

  return (
    <Modal
      content={
        <>
          {isLoading && <S.SignOutSpinner />}
          {!isLoading && (
            <S.ButtonsContainer>
              <Button
                variant="large"
                onClick={handleSignOut}
              >
                {DICTIONARY.CONFIRM}
              </Button>
              <Dialog.Close asChild>
                <Button
                  variant="large"
                  isMuted
                  autoFocus
                  disabled={isLoading}
                >
                  {DICTIONARY.CANCEL}
                </Button>
              </Dialog.Close>
            </S.ButtonsContainer>
          )}
        </>
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
