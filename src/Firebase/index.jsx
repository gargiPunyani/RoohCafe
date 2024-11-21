import { initializeApp } from "firebase/app";
// import { etAnalytics } from "firebase/getAnalytics";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyA-Ou4iZMZvg7gbEX9FU31H6M3s6LwhN5Q",
  authDomain: "rooh-cce8f.firebaseapp.com",
  databaseURL: "https://rooh-cce8f-default-rtdb.firebaseio.com",
  projectId: "rooh-cce8f",
  storageBucket: "rooh-cce8f.firebasestorage.app",
  messagingSenderId: "198859094356",
  appId: "1:198859094356:web:6097d584a1a8c22cf770c1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getAnalytics(app);
const db = getFirestore(app);

export { app, db };
