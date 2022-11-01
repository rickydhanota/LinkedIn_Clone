import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBguJ03Lgq5z1YfsWdvLf5_p4eyeB256D4",
    authDomain: "linkedin-clone-da3f1.firebaseapp.com",
    projectId: "linkedin-clone-da3f1",
    storageBucket: "linkedin-clone-da3f1.appspot.com",
    messagingSenderId: "68405425315",
    appId: "1:68405425315:web:359a07a28fc44223647b16"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};