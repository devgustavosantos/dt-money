import { Button } from '@/components';
import { custom as C } from '@/styles';
import { DICTIONARY } from '@/utils';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

import * as S from './LinkSent.styles';

export function LinkSent() {
  return (
    <AlertDialog.Root open>
      <AlertDialog.Portal>
        <C.AlertDialogOverlay />
        <C.AlertDialogContent>
          <C.AlertDialogTitle>{DICTIONARY.LINK_SENT}</C.AlertDialogTitle>
          <C.AlertDialogDescription>
            {DICTIONARY.LINK_SENT_DESCRIPTION}
          </C.AlertDialogDescription>
          <S.CustomCheckCircle weight="fill" />
          <Button
            variant="large"
            type="button"
            isMuted
          >
            {DICTIONARY.BACK}
          </Button>
        </C.AlertDialogContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
