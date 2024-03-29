// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const registerWithEmailAndPassword = async (email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        return user
    } catch (error) {
        throw Error(error);
    }
}

const loginWithEmailAndPassword = async(email, password) => {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        return res.user;
    } catch (error) {
        throw Error(error);
    }
}

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
    } catch (error) {
        throw Error(error);
    }
}

const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleAuthProvider);
        const user = res.user;
        return user;
    } catch (error) {
        throw Error(error);
    }
}

export {
    registerWithEmailAndPassword,
    loginWithEmailAndPassword,
    sendPasswordReset,
    signInWithGoogle,
    auth
}