import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBBL3LfQYCeI5yt5_sbF7QaEkiVwCm4Pj8",
    authDomain: "dorm-central-fc8df.firebaseapp.com",
    projectId: "dorm-central-fc8df",
    storageBucket: "dorm-central-fc8df.appspot.com",
    messagingSenderId: "392290520750",
    appId: "1:392290520750:web:2910bf4331b875fd99273f",
    measurementId: "G-DDWKJKV8TX"
  };

  const app = initializeApp(firebaseConfig);
  
  export const db = getFirestore(app);
