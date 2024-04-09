// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjjKIZTzlpJ3GvLazd36g89c_8dzlGAJ8",
  authDomain: "react-dragon-news-auth-ee75d.firebaseapp.com",
  projectId: "react-dragon-news-auth-ee75d",
  storageBucket: "react-dragon-news-auth-ee75d.appspot.com",
  messagingSenderId: "388051064589",
  appId: "1:388051064589:web:b5e4afe080051378090244"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;