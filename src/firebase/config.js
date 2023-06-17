// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2-Gb9MUHQJlvwf5RFhhHsbSo3xDgMQdE",
  authDomain: "dailyapp-679aa.firebaseapp.com",
  databaseURL: "https://dailyapp-679aa-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dailyapp-679aa",
  storageBucket: "dailyapp-679aa.appspot.com",
  messagingSenderId: "31180916772",
  appId: "1:31180916772:web:e6a0b9b202209970a0b0b1",
  measurementId: "G-6H80Z2JYD8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);