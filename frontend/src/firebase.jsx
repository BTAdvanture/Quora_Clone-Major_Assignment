// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOwl2aIIM4g6CkXbsHFcp-YNLSPFZww68",
  authDomain: "quora-clone-5694d.firebaseapp.com",
  projectId: "quora-clone-5694d",
  storageBucket: "quora-clone-5694d.appspot.com",
  messagingSenderId: "194493460065",
  appId: "1:194493460065:web:7bb4c4395a384658050420",
  measurementId: "G-M3K3V41YMN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {auth, provider}