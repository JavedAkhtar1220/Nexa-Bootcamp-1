// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDwrOVosf5McaJXyQC7NBfCHgxwxnPjsPM",
    authDomain: "practical-work-e9fc4.firebaseapp.com",
    databaseURL: "https://practical-work-e9fc4.firebaseio.com",
    projectId: "practical-work-e9fc4",
    storageBucket: "practical-work-e9fc4.appspot.com",
    messagingSenderId: "381421793018",
    appId: "1:381421793018:web:6da8d8f23f48cc78e8e343",
    measurementId: "G-7T9JLM2RRV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();

