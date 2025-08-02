import { Error } from '@/styles';
import { DICTIONARY } from '@/utils';

import { useSearchBar } from './SearchBar.hook';
import * as S from './SearchBar.styles';
import { SearchBarProps } from './SearchBar.types';

export function SearchBar({ className }: SearchBarProps) {
  const {
    handleSubmit,
    onSubmitSearchForm,
    register,
    errors,
    searchTerm,
    resetSearchForm,
  } = useSearchBar();

  return (
    <S.SearchBarContainer
      as="form"
      className={className}
      onSubmit={handleSubmit(onSubmitSearchForm)}
    >
      <S.SearchEntries>
        <input
          type="text"
          placeholder={DICTIONARY.SEARCH_A_TRANSACTION}
          {...register('term')}
          aria-invalid={!!errors.term}
        />
        {searchTerm && (
          <S.Button
            type="button"
            variant="clear"
            onClick={resetSearchForm}
          >
            <S.CustomX weight="bold" />
            <S.ButtonText>{DICTIONARY.CLEAR}</S.ButtonText>
          </S.Button>
        )}
        <S.Button
          type="submit"
          variant="search"
          disabled={!!errors.term}
        >
          <S.CustomMagnifyingGlass weight="bold" />
          <S.ButtonText>{DICTIONARY.SEARCH}</S.ButtonText>
        </S.Button>
      </S.SearchEntries>
      {errors.term && <Error>{errors.term.message}</Error>}
    </S.SearchBarContainer>
  );
}
