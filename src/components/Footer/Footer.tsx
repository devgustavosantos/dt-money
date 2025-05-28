import { minorLogo } from '@/assets';
import { DICTIONARY } from '@/utils';

import * as S from './Footer.styles';

export function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterWrapper>
        <S.Logo
          src={minorLogo}
          alt=""
        />
        <S.Copyright>{DICTIONARY.COPYRIGHT}</S.Copyright>
      </S.FooterWrapper>
    </S.FooterContainer>
  );
}
