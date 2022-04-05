// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHgoqxBCu693Ihpnf8x0GwpgAtV9kfDRI",
  authDomain: "science-fair-f3847.firebaseapp.com",
  projectId: "science-fair-f3847",
  storageBucket: "science-fair-f3847.appspot.com",
  messagingSenderId: "731705559671",
  appId: "1:731705559671:web:6959d498e7793a34d45472"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)