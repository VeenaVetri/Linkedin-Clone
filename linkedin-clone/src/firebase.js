import {initializeApp, } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

// // Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDlcRlZxI790gNOvZQxaHWqrBVZ46xLL5I",
    authDomain: "linkedinclone-46893.firebaseapp.com",
    projectId: "linkedinclone-46893",
    storageBucket: "linkedinclone-46893.appspot.com",
    messagingSenderId: "974645864105",
    appId: "1:974645864105:web:52cf5bab3c1ce3fd722bb8"
  };

// // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export {db, auth}