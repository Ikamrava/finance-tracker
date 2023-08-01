// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: process.env.API-KEY,
  authDomain: process.env.AUTH-DOMAIN,
  projectId: process.env.PROJECT-ID,
  storageBucket: process.env.STORAGE-BUCKET,
  messagingSenderId: process.env.MESSAGING-SENDER-ID,
  appId: process.env.APP-ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


