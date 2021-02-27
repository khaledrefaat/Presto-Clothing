import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyAzn9b99fvOuoVPQznRAXK9wnDp0R-RD0M',
  authDomain: 'presto-db.firebaseapp.com',
  projectId: 'presto-db',
  storageBucket: 'presto-db.appspot.com',
  messagingSenderId: '621035870331',
  appId: '1:621035870331:web:1f278a7e9ce9eabbddeade',
  measurementId: 'G-RZVK7KCSRT',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
