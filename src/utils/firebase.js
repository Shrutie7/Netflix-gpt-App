// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwdJLh2IgHnYtp2oNVc9Drz2xJOHHohx8",
  authDomain: "netflixapp-c91d5.firebaseapp.com",
  projectId: "netflixapp-c91d5",
  storageBucket: "netflixapp-c91d5.appspot.com",
  messagingSenderId: "393538486770",
  appId: "1:393538486770:web:993a18eb6e22291c1cab6b",
  measurementId: "G-2YC8JS9QP8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();