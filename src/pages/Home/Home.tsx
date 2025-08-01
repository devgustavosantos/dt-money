import {
  Header,
  Summary,
  TransactionsTable,
  Pagination,
  Footer,
} from '@/components';
import { useTransactionsContext } from '@/contexts';
import { DICTIONARY } from '@/utils';

import * as S from './Home.styles';

export function Home() {
  const { transactions } = useTransactionsContext();

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
        <TransactionsTable />
        <Pagination
          current={1}
          quantity={3}
        />
      </S.Main>
      <Footer />
    </S.HomeContainer>
  );
}
