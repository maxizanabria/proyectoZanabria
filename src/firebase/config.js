// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAmEPcM5t8THcHuicfWN-RLIsWKE1b8NH4",
  authDomain: "coderhouse-ecommerce-f6b5b.firebaseapp.com",
  projectId: "coderhouse-ecommerce-f6b5b",
  storageBucket: "coderhouse-ecommerce-f6b5b.appspot.com",
  messagingSenderId: "770629177507",
  appId: "1:770629177507:web:4e44b7aadf7895d92f6f16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);