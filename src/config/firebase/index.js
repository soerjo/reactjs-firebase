import firebase from "firebase/app";
import "firebase/auth";
// import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCl877-MnHC18TKRL0XATQQqM3fSlOya6g",
  authDomain: "reactjs-firebase-84860.firebaseapp.com",
  projectId: "reactjs-firebase-84860",
  storageBucket: "reactjs-firebase-84860.appspot.com",
  messagingSenderId: "283509251943",
  appId: "1:283509251943:web:edda7559e4d2c5bc0819c2",
  measurementId: "G-68FBCRGFBC",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
