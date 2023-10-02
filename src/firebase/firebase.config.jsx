// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX03fiBHIZJQTtNRa48FJOH7T5yBYKi_g",
  authDomain: "conceptual-glasses.firebaseapp.com",
  projectId: "conceptual-glasses",
  storageBucket: "conceptual-glasses.appspot.com",
  messagingSenderId: "703184320817",
  appId: "1:703184320817:web:39432cb84f465192f35810"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;