import { DICTIONARY } from '@/utils';

import * as S from './SearchBar.styles';
import { SearchBarProps } from './SearchBar.types';

export function SearchBar({ className }: SearchBarProps) {
  return (
    <S.SearchBarContainer
      as="form"
      className={className}
    >
      <input
        type="text"
        placeholder={DICTIONARY.SEARCH_A_TRANSACTION}
      />
      <S.Button type="submit">
        <S.CustomMagnifyingGlass weight="bold" />
        <S.ButtonText>{DICTIONARY.SEARCH}</S.ButtonText>
      </S.Button>
    </S.SearchBarContainer>
  );
}
