// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjRXk8rZnVZD3QclKf-lu8jKVcGsZBDrQ",
  authDomain: "e-commerce-6a404.firebaseapp.com",
  projectId: "e-commerce-6a404",
  storageBucket: "e-commerce-6a404.appspot.com",
  messagingSenderId: "152191149619",
  appId: "1:152191149619:web:5738d2b21f416206782546",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
