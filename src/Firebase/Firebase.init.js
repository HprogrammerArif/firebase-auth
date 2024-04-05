// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBItuKTYKgXHESVBWX9Y9CW-PaSswi_sO0",
  authDomain: "fir-auth-cde0f.firebaseapp.com",
  projectId: "fir-auth-cde0f",
  storageBucket: "fir-auth-cde0f.appspot.com",
  messagingSenderId: "271655628396",
  appId: "1:271655628396:web:ca43ebeafa230fe8c9f249"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);