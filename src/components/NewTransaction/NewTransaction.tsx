import { Controller } from 'react-hook-form';

import { Button } from '@/components';
import { Spinner } from '@/styles';
import { DICTIONARY } from '@/utils';

import { useNewTransaction } from './NewTransaction.hook';
import * as S from './NewTransaction.styles';

export function NewTransaction() {
  const {
    onSubmit,
    isLoading,
    control,
    errors,
    handleSubmit,
    register,
    message,
  } = useNewTransaction();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.EntriesContainer>
        <S.EntryWrapper>
          <S.Entry
            type="text"
            placeholder={DICTIONARY.DESCRIPTION}
            {...register('description')}
            hasError={!!errors.description}
          />
          {!!errors.description && (
            <S.EntryError>{errors.description.message}</S.EntryError>
          )}
        </S.EntryWrapper>
        <S.EntryWrapper>
          <S.Entry
            type="number"
            placeholder={DICTIONARY.PRICE}
            {...register('price', { valueAsNumber: true })}
            hasError={!!errors.price}
          />
          {!!errors.price && (
            <S.EntryError>{errors.price.message}</S.EntryError>
          )}
        </S.EntryWrapper>
        <S.EntryWrapper>
          <S.Entry
            type="text"
            placeholder={DICTIONARY.CATEGORY}
            {...register('category')}
            hasError={!!errors.category}
          />
          {!!errors.category && (
            <S.EntryError>{errors.category.message}</S.EntryError>
          )}
        </S.EntryWrapper>
      </S.EntriesContainer>
      <S.TransactionTypeContainer>
        <Controller
          control={control}
          name="type"
          render={({ field }) => (
            <S.TransactionTypeWrapper
              onValueChange={field.onChange}
              value={field.value}
            >
              <S.TransactionTypeButton
                value="income"
                data-custom-checked={field.value === 'income'}
              >
                <S.CustomArrowCircleUp />
                {DICTIONARY.INCOME}
              </S.TransactionTypeButton>
              <S.TransactionTypeButton
                value="outcome"
                data-custom-checked={field.value === 'outcome'}
              >
                <S.CustomArrowCircleDown />
                {DICTIONARY.OUTCOME}
              </S.TransactionTypeButton>
            </S.TransactionTypeWrapper>
          )}
        />
        {!!errors.type && <S.EntryError>{errors.type.message}</S.EntryError>}
      </S.TransactionTypeContainer>
      <Button
        variant="large"
        type="submit"
        disabled={!!Object.entries(errors).length || isLoading}
      >
        {isLoading ? <Spinner /> : DICTIONARY.REGISTER}
      </Button>
      <S.Message>{message}</S.Message>
    </form>
  );
}
