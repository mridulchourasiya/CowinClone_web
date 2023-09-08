// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyBi9FtyFfUQxJJ69QbNS8nHgP8cZMApfXs",
  authDomain: "covidauth-c0ded.firebaseapp.com",
  projectId: "covidauth-c0ded",
  storageBucket: "covidauth-c0ded.appspot.com",
  messagingSenderId: "428460942609",
  appId: "1:428460942609:web:8ab5d2a1ebde68c30258b0",
  measurementId: "G-PMPDBRQW2T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider}