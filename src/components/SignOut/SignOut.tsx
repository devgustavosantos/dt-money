import { DICTIONARY } from '@/utils';
import * as Portal from '@radix-ui/react-portal';

import * as S from './SignOut.styles';

export function SignOut() {
  return (
    <Portal.Root asChild>
      <S.SignOutButton title={DICTIONARY.LOGOUT}>
        <S.CustomSignOut />
      </S.SignOutButton>
    </Portal.Root>
  );
}
