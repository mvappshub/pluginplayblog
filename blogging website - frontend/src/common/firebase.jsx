import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDDwkTQ2Z5hveH3QaG6jOZPj9anZRhtPQw",
    authDomain: "blog-mern-59686.firebaseapp.com",
    projectId: "blog-mern-59686",
    storageBucket: "blog-mern-59686.appspot.com",
    messagingSenderId: "132655921277",
    appId: "1:132655921277:web:e93a10d3d8810fc3f45914"
  };

const app = initializeApp(firebaseConfig);

// google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user
    })
    .catch((err) => {
        console.log(err)
    })

    return user;
}