import { useForm } from 'react-hook-form';

import { useTransactionsContext } from '@/contexts';
import { zodResolver } from '@hookform/resolvers/zod';

import { SearchFormInputs, searchValidationSchema } from './SearchBar.types';

export function useSearchBar() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(searchValidationSchema),
    defaultValues: { term: '' },
    delayError: 3000,
  });

  const { handleSearchTerm, searchTerm } = useTransactionsContext();

  function onSubmitSearchForm({ term }: SearchFormInputs) {
    handleSearchTerm(term);
  }

  function resetSearchForm() {
    handleSearchTerm('');
    reset({ term: '' });
  }

  return {
    handleSubmit,
    onSubmitSearchForm,
    register,
    errors,
    searchTerm,
    resetSearchForm,
  };
}
