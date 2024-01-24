// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa2iRW9RFm_NW5T6pYOlkpqNCocD3i9E8",
  authDomain: "travel-app-aeb5b.firebaseapp.com",
  projectId: "travel-app-aeb5b",
  storageBucket: "travel-app-aeb5b.appspot.com",
  messagingSenderId: "1004776812061",
  appId: "1:1004776812061:web:6c59bb614ddd3731bee0f4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);