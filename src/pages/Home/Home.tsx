import { Card, Footer, Header } from '@/components';

import { TransactionsTable } from './components';
import { cards } from './Home.data';
import * as S from './Home.styles';

export function Home() {
  return (
    <S.HomeContainer>
      <Header />
      <S.Main>
        <S.SummaryContainer>
          <S.SummaryContent as="section">
            {cards.map(
              ({
                title,
                value,
                lastUpdate,
                prefix,
                icon,
                variant,
                isHighlighted,
              }) => (
                <Card.Root
                  key={title}
                  isHighlighted={isHighlighted}
                >
                  <Card.Top>
                    <Card.Title content={title} />
                    <Card.Icon
                      variant={variant}
                      symbol={icon}
                    />
                  </Card.Top>
                  <Card.Value amount={value} />
                  <Card.LastUpdate
                    date={lastUpdate}
                    isHighlighted={isHighlighted}
                    prefix={prefix}
                  />
                </Card.Root>
              ),
            )}
          </S.SummaryContent>
        </S.SummaryContainer>
        <S.Transactions>
          <S.TransactionsLabel>Transações</S.TransactionsLabel>
          <S.TransactionsNumber>4 itens</S.TransactionsNumber>
        </S.Transactions>
        <S.HomeSearchBar />
        <TransactionsTable />
      </S.Main>
      <Footer />
    </S.HomeContainer>
  );
}
