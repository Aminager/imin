// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3vqLiweYYlyo-3D6nBB_Zx6jV9wN9PvM",
  authDomain: "imin-auth-bd4b0.firebaseapp.com",
  projectId: "imin-auth-bd4b0",
  storageBucket: "imin-auth-bd4b0.appspot.com",
  messagingSenderId: "931226010865",
  appId: "1:931226010865:web:b3bb5aa461783b7de6d550",
  measurementId: "G-4RQV78PF76"
};

// Initialize Firebase


const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();


export {auth};