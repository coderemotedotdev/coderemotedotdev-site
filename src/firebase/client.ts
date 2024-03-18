// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCi_wCQVJhKS0QsJ5tq24gMD-blUh1Lzow",
  authDomain: "coderemotedotdev.firebaseapp.com",
  projectId: "coderemotedotdev",
  storageBucket: "coderemotedotdev.appspot.com",
  messagingSenderId: "465572793535",
  appId: "1:465572793535:web:ede5a031fdfd86dcb84a0a",
  measurementId: "G-X0YY42FQNF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
