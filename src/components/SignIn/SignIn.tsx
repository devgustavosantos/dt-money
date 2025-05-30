import { Button } from '@/components';
import { custom as C } from '@/styles';
import { DICTIONARY } from '@/utils';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

import { useSignIn } from './SignIn.hook';

export function SignIn() {
  const { handleSignIn } = useSignIn();

  return (
    <AlertDialog.Root open>
      <AlertDialog.Portal>
        <C.AlertDialogOverlay />
        <C.AlertDialogContent>
          <C.AlertDialogTitle style={{ textAlign: 'center' }}>
            {DICTIONARY.WELCOME}
          </C.AlertDialogTitle>
          <C.AlertDialogDescription style={{ textAlign: 'center' }}>
            {DICTIONARY.WELCOME_DESCRIPTION}
          </C.AlertDialogDescription>
          <Button
            variant="medium"
            autoFocus
            onClick={handleSignIn}
          >
            {DICTIONARY.ACCESS}
          </Button>
        </C.AlertDialogContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
