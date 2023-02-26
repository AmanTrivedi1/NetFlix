import firebase from 'firebase/compat/app';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC7GnMBuAf_IcnIQQ9G8NlVV8DasvKGSsc",
  authDomain: "netflix-clone-310a5.firebaseapp.com",
  projectId: "netflix-clone-310a5",
  storageBucket: "netflix-clone-310a5.appspot.com",
  messagingSenderId: "786332107269",
  appId: "1:786332107269:web:87d6de6ce2bc63223e126c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth =firebase.auth();


export { auth , db };
