import { Button } from '@/components';
import { custom as C } from '@/styles';
import { DICTIONARY } from '@/utils';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

import { useSignIn } from './SignIn.hook';
import * as S from './SignIn.styles';

export function SignIn() {
  const { handleSubmit, register, onSubmit, emailError } = useSignIn();

  return (
    <AlertDialog.Root open>
      <AlertDialog.Portal>
        <C.AlertDialogOverlay />
        <C.AlertDialogContent>
          <C.AlertDialogTitle>{DICTIONARY.WELCOME}</C.AlertDialogTitle>
          <C.AlertDialogDescription>
            {DICTIONARY.WELCOME_DESCRIPTION}
          </C.AlertDialogDescription>
          <S.LoginForm onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              placeholder={DICTIONARY.EMAIL}
              autoFocus
              {...register('email')}
            />
            {emailError && <S.ErrorMessage>{emailError}</S.ErrorMessage>}
            <Button
              type="submit"
              variant="large"
              disabled={!!emailError}
            >
              {DICTIONARY.SEND}
            </Button>
          </S.LoginForm>
        </C.AlertDialogContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
