import { useEffect, useState } from 'react';

import { useTransactionsContext } from '@/contexts';
import { BREAKPOINTS } from '@/styles';
import { CONSTANTS } from '@/utils';

export function useHome() {
  const [itemOffset, setItemOffset] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const { transactions, filteredTransactions, searchTerm } =
    useTransactionsContext();

  const transactionsToDisplay = searchTerm
    ? filteredTransactions
    : transactions;

  const endOffset = itemOffset + CONSTANTS.MAX_TRANSACTION_PER_PAGE;
  const currentTransactions = transactionsToDisplay.slice(
    itemOffset,
    endOffset,
  );
  const pageCount = Math.ceil(
    transactionsToDisplay.length / CONSTANTS.MAX_TRANSACTION_PER_PAGE,
  );

  const pageRangeDisplayed = (() => {
    const breakpointsFormatted = Object.entries(BREAKPOINTS).map(
      (breakpoint) => ({
        name: breakpoint[0],
        value: Number(breakpoint[1].replace('px', '')),
      }),
    );

    const currentBreakpoint = breakpointsFormatted.find(
      (breakpoint) => windowWidth <= breakpoint.value,
    );

    const pageRange = Object.entries(CONSTANTS.AVAILABLE_PAGE_RAGES).find(
      (breakpoint) => breakpoint[0] === currentBreakpoint?.name,
    );

    return pageRange
      ? pageRange[1]
      : CONSTANTS.AVAILABLE_PAGE_RAGES['EXTRA_LARGE'];
  })();

  function handlePageClick(event: { selected: number }) {
    const newOffset =
      (event.selected * CONSTANTS.MAX_TRANSACTION_PER_PAGE) %
      transactionsToDisplay.length;

    setItemOffset(newOffset);
  }

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    transactions,
    currentTransactions,
    handlePageClick,
    pageCount,
    pageRangeDisplayed,
  };
}
