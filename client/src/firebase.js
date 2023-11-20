// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "mern-realestate-64aca.firebaseapp.com",
  projectId: "mern-realestate-64aca",
  storageBucket: "mern-realestate-64aca.appspot.com",
  messagingSenderId: "786034238557",
  appId: "1:786034238557:web:b51bfcaf54d9ee502759b4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
