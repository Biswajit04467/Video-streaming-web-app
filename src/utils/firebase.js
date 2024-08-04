// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8loFxA8QxQAoEBBd3nndYYOJmtqYtruY",
  authDomain: "video-app-7855b.firebaseapp.com",
  projectId: "video-app-7855b",
  storageBucket: "video-app-7855b.appspot.com",
  messagingSenderId: "1036924901955",
  appId: "1:1036924901955:web:1a7460859e3d0e1db092f6",
  measurementId: "G-6RDM15YL47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);