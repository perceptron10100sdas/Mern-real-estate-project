// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjkV4DOm3IaXBySPzKVEbeQ2NmLJJmu6I",
  authDomain: "mern-estate-sdas.firebaseapp.com",
  projectId: "mern-estate-sdas",
  storageBucket: "mern-estate-sdas.appspot.com",
  messagingSenderId: "308545766745",
  appId: "1:308545766745:web:3954163d4d16ce9a673848"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);