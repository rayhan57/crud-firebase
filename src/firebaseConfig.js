// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEGfL0M4RigP5oeXggq_TVitHwgm16BkY",
  authDomain: "crud-customers-c7198.firebaseapp.com",
  projectId: "crud-customers-c7198",
  databaseURL:
    "https://crud-customers-c7198-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "crud-customers-c7198.appspot.com",
  messagingSenderId: "419785971403",
  appId: "1:419785971403:web:65e33fbf31c7f48a30ad4e",
  measurementId: "G-93C8FXSZ2R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
