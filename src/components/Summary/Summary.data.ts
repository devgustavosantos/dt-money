import { DICTIONARY } from '@/utils';
import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyCircleDollar,
} from '@phosphor-icons/react';

export const mockCards = [
  {
    title: DICTIONARY.ENTRIES,
    type: 'income',
    value: 17400,
    lastUpdate: new Date('2025-02-10T11:16:21.778Z'),
    prefix: DICTIONARY.LAST_ENTRY,
    icon: ArrowCircleUp,
    variant: 'PRIMARY_700',
    isHighlighted: false,
  },
  {
    title: DICTIONARY.EXITS,
    type: 'outcome',
    value: 1259,
    lastUpdate: new Date('2025-02-10T11:16:21.778Z'),
    prefix: DICTIONARY.LAST_EXIT,
    icon: ArrowCircleDown,
    variant: 'SECONDARY_800',
    isHighlighted: false,
  },
  {
    title: DICTIONARY.BALANCE,
    type: 'balance',
    value: 16141,
    lastUpdate: new Date('2025-02-10T11:16:21.778Z'),
    prefix: DICTIONARY.LAST_BALANCE,
    icon: CurrencyCircleDollar,
    variant: 'BASE_200',
    isHighlighted: true,
  },
] as const;
