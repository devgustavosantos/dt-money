import * as S from './Icon.styles';
import { IconProps } from './Icon.types';

export function Icon({ variant, symbol: Symbol, ...rest }: IconProps) {
  return (
    <S.IconContainer
      as={Symbol}
      variant={variant}
      {...rest}
    />
  );
}
