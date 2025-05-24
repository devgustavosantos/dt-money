import { others } from './others';

const MIN_EMAIL_LENGTH = 4;

const LOGGED_IN_PARAM = 'loggedIn';

const EMAIL_KEY = others.getLocalStorageKey('email');

const IS_LOGGED_IN_MODAL_OPEN = others.getLocalStorageKey(
  'isLoggedInModalOpen',
);

export const CONSTANTS = {
  MIN_EMAIL_LENGTH,
  LOGGED_IN_PARAM,
  EMAIL_KEY,
  IS_LOGGED_IN_MODAL_OPEN,
};
