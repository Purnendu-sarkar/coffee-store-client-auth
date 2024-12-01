// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALlytdgbClCqEu7b4e5XzG053olgfn5lE",
  authDomain: "coffee-store-9d51b.firebaseapp.com",
  projectId: "coffee-store-9d51b",
  storageBucket: "coffee-store-9d51b.firebasestorage.app",
  messagingSenderId: "909914225350",
  appId: "1:909914225350:web:c9eb176319642bba37b5c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);