// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBbVDG_ikf-MyJ5H-e0mcJh3sj43zINoSU",
    authDomain: "ayocpa-26a62.firebaseapp.com",
    projectId: "ayocpa-26a62",
    storageBucket: "ayocpa-26a62.appspot.com",
    messagingSenderId: "626575938961",
    appId: "1:626575938961:web:1b7ce2102dee1388e53630",
    measurementId: "G-FB7XJ2W6MN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)