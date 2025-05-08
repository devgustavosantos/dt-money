import {
  Header,
  Summary,
  TransactionsTable,
  Pagination,
  Footer,
  Authentication,
} from '@/components';

import * as S from './Home.styles';

export function Home() {
  return (
    <S.HomeContainer>
      <Header />
      <S.Main>
        <Summary />
        <S.Transactions>
          <S.TransactionsLabel>Transações</S.TransactionsLabel>
          <S.TransactionsNumber>4 itens</S.TransactionsNumber>
        </S.Transactions>
        <S.HomeSearchBar />
        <TransactionsTable />
        <Pagination
          current={1}
          quantity={3}
        />
      </S.Main>
      <Authentication />
      <Footer />
    </S.HomeContainer>
  );
}
