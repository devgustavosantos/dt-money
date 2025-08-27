import * as S from './Root.styles';
import { RootProps } from './Root.types';

export function Root({ children, isHighlighted, isPositive }: RootProps) {
  return (
    <S.RootContainer
      isHighlighted={isHighlighted}
      isPositive={isPositive}
    >
      {children}
    </S.RootContainer>
  );
}
