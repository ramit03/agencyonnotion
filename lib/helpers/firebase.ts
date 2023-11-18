import firebase, { initializeApp } from 'firebase/app';
import 'firebase/storage';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBXSgWoj8bTgR0pFRUsI80VovgaRSFj_iU",
    authDomain: "agencyonnotion-7969b.firebaseapp.com",
    projectId: "agencyonnotion-7969b",
    storageBucket: "agencyonnotion-7969b.appspot.com",
    messagingSenderId: "18434815162",
    appId: "1:18434815162:web:e660e75aa46ff03a3e7e83",
    measurementId: "G-LFEW2E100N"
  };
  
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);
  
  export { storage as default };