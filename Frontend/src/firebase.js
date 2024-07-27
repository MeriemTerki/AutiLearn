// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFXOA4ecyGkHquL6dCv_wYTgQG4Qmt7-o",
  authDomain: "autilearn-d8f45.firebaseapp.com",
  projectId: "autilearn-d8f45",
  storageBucket: "autilearn-d8f45.appspot.com",
  messagingSenderId: "324769562921",
  appId: "1:324769562921:web:4dab998b3e7bcacf49f738",
  measurementId: "G-V8G5V6L4Q1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
