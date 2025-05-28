import { useState } from 'react';

import { CONSTANTS } from '@/utils';

export function useLoggedIn() {
  const [isOpen, setIsOpen] = useState(() => {
    const savedChoice = window.localStorage.getItem(
      CONSTANTS.IS_LOGGED_IN_MODAL_OPEN,
    );

    return JSON.parse(savedChoice || 'true');
  });

  function handleIsOpen() {
    setIsOpen(false);

    window.localStorage.setItem(CONSTANTS.IS_LOGGED_IN_MODAL_OPEN, 'false');
  }

  return { isOpen, handleIsOpen };
}
