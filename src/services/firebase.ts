import { initializeApp } from 'firebase/app';
import {
  getAuth,
  connectAuthEmulator,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';

import config from '@/../firebase.json';

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
const db = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account ',
});

const signInWithGooglePopup = () => signInWithPopup(auth, provider);

if (import.meta.env.DEV) {
  connectAuthEmulator(auth, `http://localhost:${config.emulators.auth.port}`);
  connectFirestoreEmulator(db, '127.0.0.1', config.emulators.firestore.port);
}

export { auth, db, signInWithGooglePopup };
