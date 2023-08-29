
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAMoflqy7M9ECShbT4SFtrNvCujpJxmw4c",
  authDomain: "smart-note-ffb53.firebaseapp.com",
  projectId: "smart-note-ffb53",
  storageBucket: "smart-note-ffb53.appspot.com",
  messagingSenderId: "710151315084",
  appId: "1:710151315084:web:b92fca2bd4ba34376ee5a9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const authentication = getAuth(app);