// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNfkdH7T6uaryiHvcvgrQ0RaC0HlEooPY",
  authDomain: "samarpan-cbit-2023.firebaseapp.com",
  projectId: "samarpan-cbit-2023",
  storageBucket: "samarpan-cbit-2023.appspot.com",
  messagingSenderId: "963340767747",
  appId: "1:963340767747:web:7ce02075baa3659d3db436",
  measurementId: "G-C3ETKJ32NL"
};

// Initialize Firebase

getAnalytics(initializeApp(firebaseConfig));