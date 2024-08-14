// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "mern-blog-15a56.firebaseapp.com",
  projectId: "mern-blog-15a56",
  storageBucket: "mern-blog-15a56.appspot.com",
  messagingSenderId: "62786600024",
  appId: "1:62786600024:web:3b9dc11a19770eb372de2d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);