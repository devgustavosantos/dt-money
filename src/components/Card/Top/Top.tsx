import * as S from './Top.styles';
import { TopProps } from './Top.types';

export function Top({ children }: TopProps) {
  return <S.TopContainer>{children}</S.TopContainer>;
}
