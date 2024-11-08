// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOuPuwVp-puc-G1ifLP9q-4YKe02_Rxfg",
  authDomain: "first-firebase-6ac45.firebaseapp.com",
  projectId: "first-firebase-6ac45",
  storageBucket: "first-firebase-6ac45.firebasestorage.app",
  messagingSenderId: "246302313819",
  appId: "1:246302313819:web:12a0dde179ae5491201e7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {firebaseConfig, app}
