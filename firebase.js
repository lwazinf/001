import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC5ZxXuRdZTwgFjeDr1_K-xuB7tUqZDQaQ",
    authDomain: "modularweb3.firebaseapp.com",
    projectId: "modularweb3",
    storageBucket: "modularweb3.appspot.com",
    messagingSenderId: "569077665288",
    appId: "1:569077665288:web:7d39bc5893631fd9500bbd"
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const store = getStorage();

export { db, store };
