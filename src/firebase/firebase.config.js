// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDItVBg_dsnXjNe94IyVLOlXKSQ59oAMQ",
  authDomain: "basic-project-auth.firebaseapp.com",
  projectId: "basic-project-auth",
  storageBucket: "basic-project-auth.appspot.com",
  messagingSenderId: "710610535624",
  appId: "1:710610535624:web:70fd00b46ef2db6a7911fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;