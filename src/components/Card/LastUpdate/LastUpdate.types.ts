import { CardProps } from '../Card.types';

interface UseLastUpdateProps {
  date: Date | null;
  prefix: string;
}

type LastUpdateProps = CardProps & UseLastUpdateProps;

export type { LastUpdateProps, UseLastUpdateProps };
