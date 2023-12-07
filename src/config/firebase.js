// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDiS_7XHb5pLQhVsYmvwKDZZWzH2USydao",
    authDomain: "dashdish-bd6e4.firebaseapp.com",
    projectId: "dashdish-bd6e4",
    storageBucket: "dashdish-bd6e4.appspot.com",
    messagingSenderId: "670779038568",
    appId: "1:670779038568:web:f765922006580ead6454dd",
    measurementId: "G-DKKCGH9KZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireauth = getAuth(app)

export { app, fireauth }