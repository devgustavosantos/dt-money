import { z } from 'zod';

const transactionTypeSchema = z.object({
  type: z.enum(['outcome', 'income']),
});

const transactionSchema = transactionTypeSchema.extend({
  id: z.string(),
  description: z.string(),
  price: z.number(),
  category: z.string(),
  createdAt: z.date(),
});

type Transaction = z.infer<typeof transactionSchema>;

type TransactionType = z.infer<typeof transactionTypeSchema>;

export type { Transaction, TransactionType };
export { transactionSchema };
