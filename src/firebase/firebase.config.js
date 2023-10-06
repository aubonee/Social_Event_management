// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqtNtHTedjMEPqfGmi51wUikFvR5sPJAQ",
  authDomain: "social-event-planner-922a2.firebaseapp.com",
  projectId: "social-event-planner-922a2",
  storageBucket: "social-event-planner-922a2.appspot.com",
  messagingSenderId: "583811130898",
  appId: "1:583811130898:web:af8f73e48bd76fb7c75acb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;