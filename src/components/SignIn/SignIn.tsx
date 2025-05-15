import { Button } from '@/components';
import { custom as C } from '@/styles';
import { DICTIONARY } from '@/utils';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

import * as S from './SignIn.styles';

export function SignIn() {
  return (
    <AlertDialog.Root open>
      <AlertDialog.Portal>
        <C.AlertDialogOverlay />
        <C.AlertDialogContent>
          <C.AlertDialogTitle>{DICTIONARY.WELCOME}</C.AlertDialogTitle>
          <C.AlertDialogDescription>
            {DICTIONARY.WELCOME_DESCRIPTION}
          </C.AlertDialogDescription>
          <S.LoginForm>
            <input
              type="email"
              placeholder={DICTIONARY.EMAIL}
              autoFocus
            />
            <Button
              type="submit"
              variant="large"
            >
              {DICTIONARY.SEND}
            </Button>
          </S.LoginForm>
        </C.AlertDialogContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
