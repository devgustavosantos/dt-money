import { mainLogo } from '@/assets';
import { Modal, NewTransaction } from '@/components';
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
        <Modal
          content={<NewTransaction />}
          title={DICTIONARY.NEW_TRANSACTION}
          trigger={
            <S.NewTransactionButton variant="medium">
              {DICTIONARY.NEW_TRANSACTION}
            </S.NewTransactionButton>
          }
        />
      </S.HeaderWrapper>
    </S.HeaderContainer>
  );
}
