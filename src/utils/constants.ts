import { name as appName, version as appVersion } from '@/../package.json';

const MIN_EMAIL_LENGTH = 4;

const LOGGED_IN_PARAM = 'loggedIn';

const getLocalStorageKey = (key: string) => `${appName}@${appVersion}:${key}`;
const EMAIL_KEY = getLocalStorageKey('email');

export const CONSTANTS = {
  MIN_EMAIL_LENGTH,
  LOGGED_IN_PARAM,
  EMAIL_KEY,
};
