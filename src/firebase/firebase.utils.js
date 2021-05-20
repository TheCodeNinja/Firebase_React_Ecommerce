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


// create user document in firestore
// ---
export const storeUserToFirestore = async (fbAuthUser, extraData) => {
  if (!fbAuthUser) return;
  const userDocRef = firestore.doc(`users/${fbAuthUser.uid}`);
  const userDocSnapShot = await userDocRef.get();

  // A DocumentSnapshot contains data read from a document in your 
  // Firestore database. The data can be extracted with .data() or 
  // .get(<field>) to get a specific field.

  // For a DocumentSnapshot that points to a non-existing document, 
  // any data access will return 'undefined'. You can use the exists 
  // property to explicitly verify a document's existence.
  if (!userDocSnapShot.exists) {
    const { displayName, email } = fbAuthUser;
    const createdAt = new Date();
    try {
      // create the snapshot in firestore
      await userDocRef.set({
        displayName,
        email,
        createdAt,
        ...extraData
      });
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }
  return userDocRef;
}

// firebase module
export default firebase;