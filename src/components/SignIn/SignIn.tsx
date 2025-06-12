import { Button } from '@/components';
import { custom as C, Error, Spinner } from '@/styles';
import { DICTIONARY } from '@/utils';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

import { useSignIn } from './SignIn.hook';
import * as S from './SignIn.styles';

export function SignIn() {
  const { handleSignIn, isLoading, errorMessage } = useSignIn();

  return (
    <AlertDialog.Root open>
      <AlertDialog.Portal>
        <C.AlertDialogOverlay />
        <C.AlertDialogContent>
          <S.SignInTitle>{DICTIONARY.WELCOME}</S.SignInTitle>
          <S.SignInDescription>
            {DICTIONARY.WELCOME_DESCRIPTION}
          </S.SignInDescription>
          <Error>{errorMessage}</Error>
          <Button
            variant="medium"
            autoFocus
            onClick={handleSignIn}
            disabled={isLoading}
          >
            {isLoading && <Spinner />}
            {!isLoading && DICTIONARY.ACCESS}
          </Button>
        </C.AlertDialogContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
