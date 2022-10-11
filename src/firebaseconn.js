// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYIuhhtgbf_rpPejEvk4XNo7yyOR-4XTU",
  authDomain: "hitchtracker-54299.firebaseapp.com",
  projectId: "hitchtracker-54299",
  storageBucket: "hitchtracker-54299.appspot.com",
  messagingSenderId: "465135874027",
  appId: "1:465135874027:web:cbde7f4db30a4c5854b3ae",
  measurementId: "G-DFYCVJSPKX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
