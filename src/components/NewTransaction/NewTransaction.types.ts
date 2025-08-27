import * as z from 'zod';

import { CONSTANTS, DICTIONARY } from '@/utils';

const newTransactionFormValidationSchema = z.object({
  description: z
    .string({ message: DICTIONARY.DESCRIPTION_ERROR })
    .trim()
    .min(CONSTANTS.MIN.DESCRIPTION, { message: DICTIONARY.DESCRIPTION_ERROR }),
  price: z
    .number({ message: DICTIONARY.PRICE_ERROR })
    .min(CONSTANTS.MIN.PRICE, { message: DICTIONARY.PRICE_ERROR }),
  type: z.enum(['outcome', 'income'], {
    message: DICTIONARY.INCOME_OUTCOME_ERROR,
  }),
  category: z
    .string({ message: DICTIONARY.CATEGORY_ERROR })
    .trim()
    .min(CONSTANTS.MIN.CATEGORY, { message: DICTIONARY.CATEGORY_ERROR }),
});

type NewTransactionFormInputs = z.infer<
  typeof newTransactionFormValidationSchema
>;

export { newTransactionFormValidationSchema };
export type { NewTransactionFormInputs };
