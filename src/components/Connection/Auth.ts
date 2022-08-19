// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    setPersistence,
    browserLocalPersistence,
    signOut,
} from 'firebase/auth';
import { UserCredential } from 'firebase/auth/dist/auth';
import { ISignIn } from './AuthTypes';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();

export async function signUp(email: string, password: string) {
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signIn: ISignIn = (email, password) => {
    return setPersistence(auth, browserLocalPersistence)
        .then(async (): Promise<UserCredential> => {
            return signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => userCredential)
                .catch((err) => {
                    throw new Error(err.code);
                });
        })
        .catch((err) => {
            throw new Error(err.message);
        });
};

export function logOut(callback: () => void) {
    signOut(auth).then(() => {
        callback();
    });
}
