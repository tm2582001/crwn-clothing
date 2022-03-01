import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyADn0e7EnLrdFCBYJ1YGEywakV549KiprM",
  authDomain: "crwn-db-a1316.firebaseapp.com",
  projectId: "crwn-db-a1316",
  storageBucket: "crwn-db-a1316.appspot.com",
  messagingSenderId: "97577944884",
  appId: "1:97577944884:web:2c56c3a35071302770c761",
  measurementId: "G-62E63EW4JF",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);
export default firebase;