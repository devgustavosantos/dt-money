import { Button } from '@/components';
import { DICTIONARY } from '@/utils';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

import * as S from './LinkSent.styles';

export function LinkSent() {
  return (
    <AlertDialog.Root open>
      <AlertDialog.Portal>
        <S.CustomOverlay />
        <S.CustomContent>
          <S.CustomTitle>{DICTIONARY.LINK_SENT}</S.CustomTitle>
          <S.CustomDescription>
            {DICTIONARY.LINK_SENT_DESCRIPTION}
          </S.CustomDescription>
          <S.CustomCheckCircle weight="fill" />
          <Button
            variant="large"
            type="button"
            isMuted
          >
            {DICTIONARY.BACK}
          </Button>
        </S.CustomContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
