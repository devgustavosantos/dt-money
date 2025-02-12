import { dateFormat } from './LastUpdate.data';
import { UseLastUpdateProps } from './LastUpdate.types';

export function useLastUpdate({ date, prefix }: UseLastUpdateProps) {
  const formattedDate = dateFormat.format(date);

  const message = `${prefix} ${formattedDate}`;

  return { message };
}
