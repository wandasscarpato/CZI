// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV648J7kJoqTq641O1L0ZoBW7hwt82sjc",
  authDomain: "czi-web-aecad.firebaseapp.com",
  databaseURL: "https://czi-web-aecad-default-rtdb.firebaseio.com",
  projectId: "czi-web-aecad",
  storageBucket: "czi-web-aecad.appspot.com",
  messagingSenderId: "627978783478",
  appId: "1:627978783478:web:c146634446fb1334a83ad7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
