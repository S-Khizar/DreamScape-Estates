// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-12e71.firebaseapp.com",
  projectId: "mern-estate-12e71",
  storageBucket: "mern-estate-12e71.appspot.com",
  messagingSenderId: "742768264953",
  appId: "1:742768264953:web:1bdf5d853973cd78434428"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
