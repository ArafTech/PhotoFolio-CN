// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyBuFf3ski3i2FMG2uL26oG8QpAeqpHmAns",
  authDomain: "photofolio-c3a84.firebaseapp.com",
  projectId: "photofolio-c3a84",
  storageBucket: "photofolio-c3a84.firebasestorage.app",
  messagingSenderId: "587537440359",
  appId: "1:587537440359:web:c041e0a2db2b4c7b2afec2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);