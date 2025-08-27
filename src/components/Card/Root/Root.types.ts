import { CardProps } from '../Card.types';

export interface RootProps extends CardProps {
  children: React.ReactNode;
  isPositive?: boolean;
}
