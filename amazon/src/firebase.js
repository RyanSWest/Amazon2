
import firebase from 'firebase';
const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyB4DUch4h7qvpDFDjZ2fgsGV9GR8AnPXW8",
    authDomain: "clone-1f9bf.firebaseapp.com",
    projectId: "clone-1f9bf",
    storageBucket: "clone-1f9bf.appspot.com",
    messagingSenderId: "207166918101",
    appId: "1:207166918101:web:885e1802b0136325f1815c",
    measurementId: "G-913X5R98ZY"
  });

  const db = firebase.firestore();
  export { db }  