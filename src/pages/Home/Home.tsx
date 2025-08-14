import { Header, Summary, TransactionsTable, Footer } from '@/components';
import { DICTIONARY } from '@/utils';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

import { useHome } from './Home.hook';
import * as S from './Home.styles';

export function Home() {
  const {
    transactions,
    currentTransactions,
    handlePageClick,
    pageCount,
    pageRangeDisplayed,
  } = useHome();

  return (
    <S.HomeContainer>
      <Header />
      <S.Main>
        <Summary />
        <S.Transactions>
          <S.TransactionsLabel>Transações</S.TransactionsLabel>
          <S.TransactionsNumber>
            {transactions.length} {DICTIONARY.ITEMS}
          </S.TransactionsNumber>
        </S.Transactions>
        <S.HomeSearchBar />
        <TransactionsTable transactionsToDisplay={currentTransactions} />
        <S.CustomReactPaginate
          onPageChange={handlePageClick}
          pageRangeDisplayed={pageRangeDisplayed}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousLabel={<CaretLeft weight="bold" />}
          nextLabel={<CaretRight weight="bold" />}
          pageClassName={S.paginationClassNames.page}
          pageLinkClassName={S.paginationClassNames.pageLink}
          activeClassName={S.paginationClassNames.active}
          previousLinkClassName={S.paginationClassNames.previousLink}
          nextLinkClassName={S.paginationClassNames.nextLink}
        />
      </S.Main>
      <Footer />
    </S.HomeContainer>
  );
}
