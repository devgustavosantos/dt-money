import * as z from 'zod';

import { CONSTANTS, DICTIONARY } from '@/utils';

const signInFormSchema = z
  .object({
    email: z
      .string()
      .min(CONSTANTS.MIN_EMAIL_LENGTH, {
        message: DICTIONARY.EMAIL_LENGTH,
      })
      .email(DICTIONARY.INVALID_EMAIL),
  })
  .required();

type SignInFormType = z.infer<typeof signInFormSchema>;

export { signInFormSchema };
export type { SignInFormType };
