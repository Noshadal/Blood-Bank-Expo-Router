import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDtnCtbAfhqf-JOMkvUc15dJbhNIIkoLrA',
  authDomain: 'bloodbnk-be95a.firebaseapp.com',
  projectId: 'bloodbnk-be95a',
  storageBucket: 'bloodbnk-be95a.firebasestorage.app',
  messagingSenderId: '319574629313',
  appId: '1:319574629313:web:d40d7b33c9eabf6bec6d40',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
