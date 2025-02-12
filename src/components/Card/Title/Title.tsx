import * as S from './Title.styles';
import { TitleProps } from './Title.types';

export function Title({ content }: TitleProps) {
  return <S.TitleContainer>{content}</S.TitleContainer>;
}
