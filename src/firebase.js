import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {

  apiKey: "AIzaSyAZRfvlJ-9J7wXfzC16n1BItRaMIs8feWU",

  authDomain: "sh-dda82.firebaseapp.com",

  projectId: "sh-dda82",

  storageBucket: "sh-dda82.appspot.com",

  messagingSenderId: "980470889018",

  appId: "1:980470889018:web:fea1bf871a60b8156e1303",


};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db }
