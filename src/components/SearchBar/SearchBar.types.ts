import { z } from 'zod';

import { DICTIONARY } from '@/utils';

interface SearchBarProps {
  className?: string;
}

interface SearchButtonProps {
  variant: 'search' | 'clear';
}

const searchValidationSchema = z.object({
  term: z.string().trim().min(1, {
    message: DICTIONARY.SEARCH_INPUT_ERROR,
  }),
});

type SearchFormInputs = z.infer<typeof searchValidationSchema>;

export { searchValidationSchema };
export type { SearchFormInputs, SearchBarProps, SearchButtonProps };
