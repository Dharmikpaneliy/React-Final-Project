// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ9A5e1uj0-wRPKtFBM5oQMX9V3yImZmk",
  authDomain: "reactproject-1a9e3.firebaseapp.com",
  projectId: "reactproject-1a9e3",
  storageBucket: "reactproject-1a9e3.appspot.com",
  messagingSenderId: "270480125868",
  appId: "1:270480125868:web:330df1dd8fe70a9a969409",
  measurementId: "G-FVLP6CXXQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);