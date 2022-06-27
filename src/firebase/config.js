import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOjQzi9YFA1h7912aE8A1cUerMd68URUc",
  authDomain: "finance-control-deb48.firebaseapp.com",
  projectId: "finance-control-deb48",
  storageBucket: "finance-control-deb48.appspot.com",
  messagingSenderId: "819704393210",
  appId: "1:819704393210:web:f4da15dc23e41bb7550843",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const  timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp };
