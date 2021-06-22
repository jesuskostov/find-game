import fb from "firebase/app"
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyC1jcbIy37zP-JKUD5sY_z3syNWXrP-Fco",
    authDomain: "find-game-86cae.firebaseapp.com",
    projectId: "find-game-86cae",
    storageBucket: "find-game-86cae.appspot.com",
    messagingSenderId: "1084836955451",
    appId: "1:1084836955451:web:1764b6da4bda1de1ae231e",
    measurementId: "G-QWFVE9FB7E"
};

export const firebase = !fb.apps.length ? fb.initializeApp(config) : fb.app();
export const db = fb.firestore()
 