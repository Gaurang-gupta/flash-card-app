import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDlVFHAOVVKPgU8ogHpKkGRBxiyErjub6c",
  authDomain: "flashcardapp-b6582.firebaseapp.com",
  projectId: "flashcardapp-b6582",
  storageBucket: "flashcardapp-b6582.appspot.com",
  messagingSenderId: "237233827421",
  appId: "1:237233827421:web:12cf045f0667d742fb27b4",
  measurementId: "G-GZ038CSE9Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export { auth, db }