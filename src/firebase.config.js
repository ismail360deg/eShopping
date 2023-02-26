
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAWirNUlMWY0HLEoIX7CNrs5DoFL3n9BTE",
  authDomain: "e-shopping-983ef.firebaseapp.com",
  projectId: "e-shopping-983ef",
  storageBucket: "e-shopping-983ef.appspot.com",
  messagingSenderId: "772487428539",
  appId: "1:772487428539:web:5b7c5ca2f7fd178d25ec9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;