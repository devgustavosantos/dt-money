import { useTransactionsContext } from '@/contexts';

import { mockCards } from './Summary.data';
import { GetLastUpdate, Totals } from './Summary.types';

export function useSummary() {
  const { transactions } = useTransactionsContext();

  function getLastUpdate({ currentDate, otherDate }: GetLastUpdate) {
    if (!currentDate) {
      return otherDate;
    }

    const currentTime = new Date(currentDate).getTime();
    const otherTime = new Date(otherDate).getTime();

    return currentTime >= otherTime ? currentDate : otherDate;
  }

  const totals = transactions.reduce<Totals>(
    (acc, transaction) => ({
      ...acc,
      [transaction.type]: {
        value: acc[transaction.type].value + transaction.price,
        lastUpdate: getLastUpdate({
          currentDate: acc[transaction.type].lastUpdate,
          otherDate: transaction.createdAt,
        }),
      },
      balance: {
        value:
          transaction.type === 'income'
            ? acc.balance.value + transaction.price
            : acc.balance.value - transaction.price,
        lastUpdate: getLastUpdate({
          currentDate: acc.balance.lastUpdate,
          otherDate: transaction.createdAt,
        }),
      },
    }),
    {
      income: {
        value: 0,
        lastUpdate: null,
      },
      outcome: {
        value: 0,
        lastUpdate: null,
      },
      balance: {
        value: 0,
        lastUpdate: null,
      },
    },
  );

  const realCards = mockCards.map((card) => ({
    ...card,
    value: totals[card.type].value,
    lastUpdate: totals[card.type].lastUpdate,
  }));

  return { realCards };
}
