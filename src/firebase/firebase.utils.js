import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDWvToRS6yMtCikix27XZbuorDJHmBVeXg",
  authDomain: "clothingeshop-a5fbe.firebaseapp.com",
  projectId: "clothingeshop-a5fbe",
  storageBucket: "clothingeshop-a5fbe.appspot.com",
  messagingSenderId: "239939113920",
  appId: "1:239939113920:web:fb3d8f1eeb930c8a626e25"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// auth service
export const auth = firebase.auth();

// db service
export const firestore = firebase.firestore();

// sign in with google service
// ---
// important: need to enable firebase authentication google provider service
// ---
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// firebase module
export default firebase;