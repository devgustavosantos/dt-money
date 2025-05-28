import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyCircleDollar,
} from '@phosphor-icons/react';

export const cards = [
  {
    title: 'Entradas',
    value: 17400,
    lastUpdate: new Date('2025-02-10T11:16:21.778Z'),
    prefix: 'Ultima entrada em',
    icon: ArrowCircleUp,
    variant: 'PRIMARY_700',
    isHighlighted: false,
  },
  {
    title: 'Saídas',
    value: 1259,
    lastUpdate: new Date('2025-02-10T11:16:21.778Z'),
    prefix: 'Ultima saída em',
    icon: ArrowCircleDown,
    variant: 'SECONDARY_800',
    isHighlighted: false,
  },
  {
    title: 'Total',
    value: 16141,
    lastUpdate: new Date('2025-02-10T11:16:21.778Z'),
    prefix: 'Atualizado em',
    icon: CurrencyCircleDollar,
    variant: 'BASE_200',
    isHighlighted: true,
  },
] as const;
