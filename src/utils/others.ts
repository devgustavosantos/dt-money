import { name as appName, version as appVersion } from '@/../package.json';

const getLocalStorageKey = (key: string) => `${appName}@${appVersion}:${key}`;

const IS_AUTHENTICATED = getLocalStorageKey('isAuthenticated');

export const others = {
  getLocalStorageKey,
  IS_AUTHENTICATED,
};
