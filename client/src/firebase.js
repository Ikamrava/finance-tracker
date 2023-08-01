// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyAgkiX3rj8FP3rCLgxDQMvj_mi9hu6Sn3Q",
  authDomain: "expense-tracker-fe499.firebaseapp.com",
  projectId: "expense-tracker-fe499",
  storageBucket: "expense-tracker-fe499.appspot.com",
  messagingSenderId: "656714788033",
  appId: "1:656714788033:web:5084417dd4047a33bcb840",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
