interface GetLastUpdate {
  currentDate: Date | null;
  otherDate: Date;
}

interface Total {
  value: number;
  lastUpdate: Date | null;
}

interface Totals {
  income: Total;
  outcome: Total;
  balance: Total;
}

export type { GetLastUpdate, Totals };
