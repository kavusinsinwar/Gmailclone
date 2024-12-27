
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB86H6ekP-B8iW86WWLhYYTtsmZYDG5ds0",
  authDomain: "clone-application-f82e6.firebaseapp.com",
  projectId: "clone-application-f82e6",
  storageBucket: "clone-application-f82e6.firebasestorage.app",
  messagingSenderId: "152251345783",
  appId: "1:152251345783:web:62c57b7fd272c36e378f72",
  measurementId: "G-RDNF1BRYKJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const provider = new GoogleAuthProvider()