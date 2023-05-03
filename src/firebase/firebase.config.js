// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdunYtHTx3X6C-lCdcXBGAddUu5OmI71Q",
  authDomain: "chillers-restaurant.firebaseapp.com",
  projectId: "chillers-restaurant",
  storageBucket: "chillers-restaurant.appspot.com",
  messagingSenderId: "21426658806",
  appId: "1:21426658806:web:1a3aa971062f5e934e3bd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;