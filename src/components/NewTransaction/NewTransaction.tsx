import { Button } from '@/components/Button';
import { DICTIONARY } from '@/utils';
import { ArrowCircleDown, ArrowCircleUp } from '@phosphor-icons/react';

import * as S from './NewTransaction.styles';

export function NewTransaction() {
  return (
    <form>
      <S.EntriesContainer>
        <input
          type="text"
          placeholder={DICTIONARY.DESCRIPTION}
        />
        <input
          type="number"
          placeholder={DICTIONARY.PRICE}
        />
        <input
          type="text"
          placeholder={DICTIONARY.CATEGORY}
        />
      </S.EntriesContainer>
      <S.TransactionTypeContainer>
        <S.TransactionTypeButton value="income">
          <ArrowCircleUp />
          <S.TransactionTypeText>{DICTIONARY.INCOME}</S.TransactionTypeText>
        </S.TransactionTypeButton>
        <S.TransactionTypeButton value="outcome">
          <ArrowCircleDown />
          <S.TransactionTypeText>{DICTIONARY.OUTCOME}</S.TransactionTypeText>
        </S.TransactionTypeButton>
      </S.TransactionTypeContainer>
      <Button
        variant="large"
        type="submit"
      >
        {DICTIONARY.REGISTER}
      </Button>
    </form>
  );
}
