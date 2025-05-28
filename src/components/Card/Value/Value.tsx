import { useValue } from './Value.hook';
import * as S from './Value.styles';
import { ValueProps } from './Value.types';

export function Value({ amount }: ValueProps) {
  const { formattedAmount } = useValue({ amount });

  return <S.ValueContainer>{formattedAmount}</S.ValueContainer>;
}
