// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyBNKLW5ldgWqOIbn_S9t-JKC0OA56kU4rM",
   authDomain: "insta-2-27278.firebaseapp.com",
   projectId: "insta-2-27278",
   storageBucket: "insta-2-27278.appspot.com",
   messagingSenderId: "728713468487",
   appId: "1:728713468487:web:8f89c51821e68845e56f62",
   measurementId: "G-YWNJ0JPJ41"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);

const db = getFirestore()
const storage = getStorage()

export {
   db,
   storage,
   analytics
}