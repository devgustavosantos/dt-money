import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';

import { CONSTANTS } from '@/utils';

import config from '../../firebase.json';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

if (import.meta.env.DEV) {
  connectAuthEmulator(auth, `http://localhost:${config.emulators.auth.port}`);
}

const actionCodeSettings = {
  url: `${import.meta.env.DEV ? window.location.origin : import.meta.env.VITE_PROD_URL}/?${CONSTANTS.LOGGED_IN_PARAM}=true`,
  handleCodeInApp: true,
  linkDomain: 'custom-domain.com',
};

export { auth, actionCodeSettings };
