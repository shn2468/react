// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn_HCcSIwMpViPd63NCr96Uo3tGsCsbuQ",
  authDomain: "taskmanager-a8ebd.firebaseapp.com",
  projectId: "taskmanager-a8ebd",
  storageBucket: "taskmanager-a8ebd.appspot.com",
  messagingSenderId: "634289675681",
  appId: "1:634289675681:web:89a6fb7e69242c3d913fe0",
  measurementId: "G-DJ2RZCH85J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);