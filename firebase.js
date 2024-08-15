// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqWTSJan9YS56ztBcdTU-CWeKYHgFqSC8",
  authDomain: "fir-saas-93392.firebaseapp.com",
  projectId: "fir-saas-93392",
  storageBucket: "fir-saas-93392.appspot.com",
  messagingSenderId: "562946157200",
  appId: "1:562946157200:web:e724a6b1ecb59060354615",
  measurementId: "G-CSELCTNKH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);