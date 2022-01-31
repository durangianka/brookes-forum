// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAG-IWxgUtSXA867bOzibiDfJs1fWNqjlU",
    authDomain: "brookes-forum.firebaseapp.com",
    projectId: "brookes-forum",
    storageBucket: "brookes-forum.appspot.com",
    messagingSenderId: "536954994100",
    appId: "1:536954994100:web:e67cba6c2ae023fa2486e1"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };