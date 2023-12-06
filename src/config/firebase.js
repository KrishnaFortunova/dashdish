// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAr3-jtIHN_CDtRxYAHN9Kg5QgcwI28S1M",
    authDomain: "authentication-be699.firebaseapp.com",
    projectId: "authentication-be699",
    storageBucket: "authentication-be699.appspot.com",
    messagingSenderId: "574136362996",
    appId: "1:574136362996:web:b0d241046880bf68203ba1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireauth = getAuth(app)

export { fireauth }