// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2DBOaWD--MlTxxJJOcip9Hkqylt4kS0c",
  authDomain: "blackgymwebsys.firebaseapp.com",
  projectId: "blackgymwebsys",
  storageBucket: "blackgymwebsys.appspot.com",
  messagingSenderId: "519856815249",
  appId: "1:519856815249:web:271d7091fd795a1c4a1330",
  measurementId: "G-91WN3HEMDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
analytics;