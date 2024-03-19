// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { FIREBASE_APPID, FIREBASE_KEY } from "./constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_KEY,
  authDomain: "netflix-gpt-ebebe.firebaseapp.com",
  projectId: "netflix-gpt-ebebe",
  storageBucket: "netflix-gpt-ebebe.appspot.com",
  messagingSenderId: "549263586003",
  appId: "1:549263586003:web:b2f53dcbc795872ff75a26",
  measurementId: FIREBASE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
