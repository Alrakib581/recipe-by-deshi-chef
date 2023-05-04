// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB_DHmGBeDnuAc_GiRES2K1Hl2EfywyZw",
  authDomain: "recipes-by-deshi-chef.firebaseapp.com",
  projectId: "recipes-by-deshi-chef",
  storageBucket: "recipes-by-deshi-chef.appspot.com",
  messagingSenderId: "752374916900",
  appId: "1:752374916900:web:1ce162d0e2d005792df5b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;