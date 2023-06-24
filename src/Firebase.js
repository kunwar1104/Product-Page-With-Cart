// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsNTfHq990XBFiMyliz9BvevxDiAM9P-Q",
  authDomain: "e-commer-web.firebaseapp.com",
  projectId: "e-commer-web",
  storageBucket: "e-commer-web.appspot.com",
  messagingSenderId: "627353252862",
  appId: "1:627353252862:web:38055eec167a243d9dc6af",
  measurementId: "G-5LZ6RG4411"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app)
 const analytics = getAnalytics(app);
 export {auth, app }
