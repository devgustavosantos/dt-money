import { UsePagination } from './Pagination.types';

export function usePagination({ quantity }: UsePagination) {
  const pages = Array(quantity)
    .fill(0)
    .map((_, index) => index + 1);

  return { pages };
}
