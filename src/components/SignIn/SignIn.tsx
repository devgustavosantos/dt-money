import { Button } from '@/components';
import { custom as C } from '@/styles';
import { DICTIONARY } from '@/utils';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

import { useSignIn } from './SignIn.hook';
import * as S from './SignIn.styles';

export function SignIn() {
  const { handleSubmit, register, onSubmit, error, isLoading } = useSignIn();

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
            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
            <Button
              type="submit"
              variant="large"
              disabled={!!error || isLoading}
            >
              {!isLoading && DICTIONARY.SEND}
              {isLoading && <S.CustomCircleNotch weight="bold" />}
            </Button>
          </S.LoginForm>
        </C.AlertDialogContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
