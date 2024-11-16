import firebase from "firebase/compat/app";

var firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyA-Ou4iZMZvg7gbEX9FU31H6M3s6LwhN5Q",
  authDomain: "rooh-cce8f.firebaseapp.com",
  databaseURL: "https://rooh-cce8f-default-rtdb.firebaseio.com",
  projectId: "rooh-cce8f",
  storageBucket: "rooh-cce8f.firebasestorage.app",
  messagingSenderId: "198859094356",
  appId: "1:198859094356:web:6097d584a1a8c22cf770c1"
});

export const db = firebaseapp.firestore()