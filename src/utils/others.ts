import { name as appName, version as appVersion } from '@/../package.json';

const getLocalStorageKey = (key: string) => `${appName}@${appVersion}:${key}`;

export const others = {
  getLocalStorageKey,
};
