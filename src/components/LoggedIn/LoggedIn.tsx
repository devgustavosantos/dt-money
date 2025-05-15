import { Button } from '@/components';
import { DICTIONARY } from '@/utils';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

import * as S from './LoggedIn.styles';

export function LoggedIn() {
  return (
    <AlertDialog.Root open>
      <AlertDialog.Portal>
        <S.CustomOverlay />
        <S.CustomContent>
          <S.CustomTitle>{DICTIONARY.LOGGED_IN}</S.CustomTitle>
          <S.CustomDescription>
            {DICTIONARY.LOGGED_IN_DESCRIPTION}
          </S.CustomDescription>
          <S.CustomUserCircleCheck weight="fill" />
          <Button
            variant="large"
            type="button"
          >
            {DICTIONARY.START}
          </Button>
        </S.CustomContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
