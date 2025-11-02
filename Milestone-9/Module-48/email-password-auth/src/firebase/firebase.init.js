// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// DANGER --- DO NOT SHARE CONFIG IN PUBLIC
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "FIREBASE API-KEY",
  authDomain: "FIREBASE AUTH DOMAIN",
  projectId: "FIREBASE PROJECT ID",
  storageBucket: "FIREBASE STORAGE BUCKET",
  messagingSenderId: "FIREBASE MESSAGING SENDER ID",
  appId: "FIREBASE APP ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
