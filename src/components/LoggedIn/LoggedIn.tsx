import { Button } from '@/components';
import { custom as C } from '@/styles';
import { DICTIONARY } from '@/utils';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

import { useLoggedIn } from './LoggedIn.hook';
import * as S from './LoggedIn.styles';

export function LoggedIn() {
  const { isOpen, handleIsOpen } = useLoggedIn();

  return (
    <AlertDialog.Root open={isOpen}>
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
            onClick={handleIsOpen}
          >
            {DICTIONARY.START}
          </Button>
        </C.AlertDialogContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
