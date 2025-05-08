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
          <S.LoginForm>
            <input
              type="text"
              placeholder={DICTIONARY.USERNAME}
              autoFocus
              style={{ display: 'none' }}
            />
            <S.ButtonsContainer>
              <Button
                type="button"
                variant="large"
              >
                {DICTIONARY.ALREADY_REGISTERED}
              </Button>
              <Button
                type="button"
                variant="large"
                isMuted
              >
                {DICTIONARY.WANT_REGISTER}
              </Button>
            </S.ButtonsContainer>
            <S.ErrorMessage style={{ display: 'none' }}>
              {DICTIONARY.USER_ALREADY_REGISTERED}
            </S.ErrorMessage>
          </S.LoginForm>
        </S.CustomContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
