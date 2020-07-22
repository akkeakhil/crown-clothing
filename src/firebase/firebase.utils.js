import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBOYlZwNnqoZmFDBzsdHwHsSQL9qw0Tyeg",
  authDomain: "crown-db-82bc3.firebaseapp.com",
  databaseURL: "https://crown-db-82bc3.firebaseio.com",
  projectId: "crown-db-82bc3",
  storageBucket: "crown-db-82bc3.appspot.com",
  messagingSenderId: "399425376467",
  appId: "1:399425376467:web:98bce8314b834f6dd94426",
  measurementId: "G-SK20FGM2NL"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;