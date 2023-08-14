// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import { apiKey, authDomain, projectId,storageBucket,messagingSenderId,appId } from './config'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyBODlHsPUSI7lmTqy9iXX5mL80VCw7rjD0",
  authDomain: "reaxtexpensetracker.firebaseapp.com",
  projectId: "reaxtexpensetracker",
  storageBucket: "reaxtexpensetracker.appspot.com",
  messagingSenderId: "664250448883",
  appId: "1:664250448883:web:70de4d66d6569d7cf2f086"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)


