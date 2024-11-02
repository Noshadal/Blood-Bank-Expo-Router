import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDtnCtbAfhqf-JOMkvUc15dJbhNIIkoLrA',
  authDomain: 'bloodbnk-be95a.firebaseapp.com',
  projectId: 'bloodbnk-be95a',
  storageBucket: 'bloodbnk-be95a.firebasestorage.app',
  messagingSenderId: '319574629313',
  appId: '1:319574629313:web:d40d7b33c9eabf6bec6d40',
};

const firebase = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export default firebase;
