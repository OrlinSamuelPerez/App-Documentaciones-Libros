import firebase from 'firebase/app';
import "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCJPWytxoywoNHyesoT3OCPLFlQ3KmDuZY",
    authDomain: "app-documentaciones.firebaseapp.com",
    projectId: "app-documentaciones",
    storageBucket: "app-documentaciones.appspot.com",
    messagingSenderId: "469676576790",
    appId: "1:469676576790:web:f81c9b69bf1f227b3ca537",
    measurementId: "G-VPNRE20GE0"
  };
// Initialize Firebase

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const db = firebase.firestore();
export const providerGitHub = new firebase.auth.GithubAuthProvider();
export const providerGoogle = new firebase.auth.GoogleAuthProvider();
export const storage = firebase.storage();
 

