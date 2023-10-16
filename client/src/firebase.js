// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-market-9c235.firebaseapp.com",
  projectId: "estate-market-9c235",
  storageBucket: "estate-market-9c235.appspot.com",
  messagingSenderId: "407735106212",
  appId: "1:407735106212:web:5e6aa451513c23ba0bc431"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);