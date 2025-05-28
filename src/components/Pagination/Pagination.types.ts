interface UsePagination {
  quantity: number;
}

interface PaginationProps extends UsePagination {
  current: number;
}

export type { UsePagination, PaginationProps };
