import { DICTIONARY } from '@/utils';

import { dateFormat } from './LastUpdate.data';
import { UseLastUpdateProps } from './LastUpdate.types';

export function useLastUpdate({ date, prefix }: UseLastUpdateProps) {
  const message = date
    ? `${prefix} ${dateFormat.format(date)}`
    : DICTIONARY.UNAVAILABLE;

  return { message };
}
