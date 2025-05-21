import { formats } from '@/utils';

import { ValueProps } from './Value.types';

export function useValue({ amount }: ValueProps) {
  const formattedAmount = formats.money.format(amount);

  return { formattedAmount };
}
