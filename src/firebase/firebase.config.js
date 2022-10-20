// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcBEqzGropfjxhvoBit0aWPoGA8S7TtlM",
  authDomain: "dragon-news-client-ebea6.firebaseapp.com",
  projectId: "dragon-news-client-ebea6",
  storageBucket: "dragon-news-client-ebea6.appspot.com",
  messagingSenderId: "868974311852",
  appId: "1:868974311852:web:975f36244959b118832209"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;