// DANGER --> DO NOT SHARE OR UPLOAD TO GITHUB.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "FIREBASE API KEY",
  authDomain: "FIREBASE AUTH DOMAIN",
  projectId: "FIREBASE PROJECT ID",
  storageBucket: "FIREBASE STORAGE BUCKET",
  messagingSenderId: "FIREBASE MESSAGING SENDER ID",
  appId: "FIREBASE APP ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
