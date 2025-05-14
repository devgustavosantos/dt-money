import { Button } from '@/components';
import { DICTIONARY } from '@/utils';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

import * as S from './SignIn.styles';

export function SignIn() {
  return (
    <AlertDialog.Root open>
      <AlertDialog.Portal>
        <S.CustomOverlay />
        <S.CustomContent>
          <S.CustomTitle>{DICTIONARY.WELCOME}</S.CustomTitle>
          <S.CustomDescription>
            {DICTIONARY.WELCOME_DESCRIPTION}
          </S.CustomDescription>
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
        </S.CustomContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
