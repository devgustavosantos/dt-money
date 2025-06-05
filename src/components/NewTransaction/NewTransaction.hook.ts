import { NewTransactionFormSchema } from './NewTransaction.types';

export function useNewTransaction() {
  function onSubmit(data: NewTransactionFormSchema) {
    console.info('>>> data', data);
  }

  return { onSubmit };
}
