import { mainLogo } from '@/assets';
import { DICTIONARY } from '@/utils';

import * as S from './Header.styles';

export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderWrapper>
        <S.Logo
          src={mainLogo}
          alt=""
        />
        <S.NewTransactionButton variant="medium">
          {DICTIONARY.NEW_TRANSACTION_BUTTON}
        </S.NewTransactionButton>
      </S.HeaderWrapper>
    </S.HeaderContainer>
  );
}
