
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAPw3RL8hZJrN3hhN_2T5rsIMUf6E5-IaY",
  authDomain: "smart-note-4e317.firebaseapp.com",
  projectId: "smart-note-4e317",
  storageBucket: "smart-note-4e317.appspot.com",
  messagingSenderId: "994450701563",
  appId: "1:994450701563:web:a2b019f3da8cf408a7445e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const authentication = getAuth(app);
