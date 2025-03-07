import { CaretLeft, CaretRight } from '@phosphor-icons/react';

import { usePagination } from './Pagination.hook';
import * as S from './Pagination.styles';
import { PaginationProps } from './Pagination.types';

export function Pagination({ quantity, current }: PaginationProps) {
  const { pages } = usePagination({ quantity });

  return (
    <S.PaginationContainer>
      <S.ChangePage disabled={current === 1}>
        <CaretLeft weight="bold" />
      </S.ChangePage>
      <S.PagesContainer defaultValue="1">
        {pages.map((page) => (
          <S.PageSelector value={String(page)}>
            <S.PageIndicator>{page}</S.PageIndicator>
          </S.PageSelector>
        ))}
      </S.PagesContainer>
      <S.ChangePage disabled={current === quantity}>
        <CaretRight weight="bold" />
      </S.ChangePage>
    </S.PaginationContainer>
  );
}
