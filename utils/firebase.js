import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: 'AIzaSyDtnCtbAfhqf-JOMkvUc15dJbhNIIkoLrA',
  authDomain: 'bloodbnk-be95a.firebaseapp.com',
  projectId: 'bloodbnk-be95a',
  storageBucket: 'bloodbnk-be95a.firebasestorage.app',
  messagingSenderId: '319574629313',
  appId: '1:319574629313:web:d40d7b33c9eabf6bec6d40',
};

const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase)
export const db = getFirestore(firebase);
