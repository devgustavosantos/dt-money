import * as z from 'zod';

import { CONSTANTS, DICTIONARY } from '@/utils';

const newTransactionFormValidationSchema = z.object({
  description: z
    .string()
    .min(CONSTANTS.MIN.DESCRIPTION, { message: DICTIONARY.DESCRIPTION_ERROR }),
  price: z
    .number({ message: DICTIONARY.PRICE_ERROR })
    .min(CONSTANTS.MIN.PRICE, { message: DICTIONARY.PRICE_ERROR }),
  type: z.enum(['outcome', 'income'], {
    message: DICTIONARY.INCOME_OUTCOME_ERROR,
  }),
  category: z
    .string()
    .min(CONSTANTS.MIN.CATEGORY, { message: DICTIONARY.CATEGORY_ERROR }),
});

type NewTransactionFormInputs = z.infer<
  typeof newTransactionFormValidationSchema
>;

interface EntryProps {
  hasError?: boolean;
}

export { newTransactionFormValidationSchema };
export type { NewTransactionFormInputs, EntryProps };
