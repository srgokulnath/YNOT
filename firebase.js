// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhtWCAx-JChNGlrSibw7hDTzy69lNISmo",
  authDomain: "ynot-3e1db.firebaseapp.com",
  projectId: "ynot-3e1db",
  storageBucket: "ynot-3e1db.appspot.com",
  messagingSenderId: "306200310044",
  appId: "1:306200310044:web:4c132b56461a5daf6d0ad9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

export { auth, db }