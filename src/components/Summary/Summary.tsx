import { Card } from '@/components';

import { cards } from './Summary.data';
import * as S from './Summary.styles';

export function Summary() {
  return (
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
  );
}
