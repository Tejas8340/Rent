// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9VSZ1hVWwPMkLqXWgs1JPwB6thhmDXR4",
  authDomain: "flat-on-rent.firebaseapp.com",
  projectId: "flat-on-rent",
  storageBucket: "flat-on-rent.appspot.com",
  messagingSenderId: "810504965998",
  appId: "1:810504965998:web:c19f05c25682b770b87b7f"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();