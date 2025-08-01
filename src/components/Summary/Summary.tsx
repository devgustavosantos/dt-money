import { Card } from '@/components';

import { useSummary } from './Summary.hook';
import * as S from './Summary.styles';

export function Summary() {
  const { realCards } = useSummary();

  return (
    <S.SummaryContainer>
      <S.SummaryContent as="section">
        {realCards.map(
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
              isPositive={value >= 0}
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
