import * as S from './Root.styles';
import { RootProps } from './Root.types';

export function Root({ children, isHighlighted }: RootProps) {
  return (
    <S.RootContainer isHighlighted={isHighlighted}>{children}</S.RootContainer>
  );
}
