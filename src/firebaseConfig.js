import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBICwW-jSx9WXHWBucyXg3K-U3HbqENlFc",
  authDomain: "cart-webapp-b4eb3.firebaseapp.com",
  projectId: "cart-webapp-b4eb3",
  storageBucket: "cart-webapp-b4eb3.appspot.com",
  messagingSenderId: "940351198584",
  appId: "1:940351198584:web:b885f1ac8e4c2c7d58648d"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db=app.firestore();
export {db};