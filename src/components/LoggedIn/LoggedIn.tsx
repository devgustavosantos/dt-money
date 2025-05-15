import { Button } from '@/components';
import { custom as C } from '@/styles';
import { DICTIONARY } from '@/utils';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

import * as S from './LoggedIn.styles';

export function LoggedIn() {
  return (
    <AlertDialog.Root open>
      <AlertDialog.Portal>
        <C.AlertDialogOverlay />
        <C.AlertDialogContent>
          <C.AlertDialogTitle>{DICTIONARY.LOGGED_IN}</C.AlertDialogTitle>
          <C.AlertDialogDescription>
            {DICTIONARY.LOGGED_IN_DESCRIPTION}
          </C.AlertDialogDescription>
          <S.CustomUserCircleCheck weight="fill" />
          <Button
            variant="large"
            type="button"
          >
            {DICTIONARY.START}
          </Button>
        </C.AlertDialogContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
