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

export const createUserProfileDocument =async (userAuth , additionalData) =>{
if (!userAuth) return; 

const userRef = firestore.doc(`users/${userAuth.uid}`);

const snapShot = await userRef.get();

if(!snapShot.exists){
const {displayName, email} = userAuth;
const createdAt = new Date();

try{
  await userRef.set({
  displayName,
  email,
  createdAt,
  ...additionalData
  })
}catch(error){
  console.log('error creating user', error.message);
}
}

return userRef;
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;