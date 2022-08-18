import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDd-U22RiyYEMf9n6R60WMu7uxhoS5meOM",
  authDomain: "socialproject-26668.firebaseapp.com",
  projectId: "socialproject-26668",
  storageBucket: "socialproject-26668.appspot.com",
  messagingSenderId: "523091600352",
  appId: "1:523091600352:web:4b42fdd8acf87ff7650185"
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const store = getStorage();

export { db, store };
