
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

/*
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-ba6ba.firebaseapp.com",
  projectId: "interviewiq-ba6ba",
  storageBucket: "interviewiq-ba6ba.firebasestorage.app",
  messagingSenderId: "862159592601",
  appId: "1:862159592601:web:7308d702cd708076ddec08"
}; */

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "nextroundai-77caa.firebaseapp.com",
  projectId: "nextroundai-77caa",
  storageBucket: "nextroundai-77caa.firebasestorage.app",
  messagingSenderId: "24822175970",
  appId: "1:24822175970:web:f1663ecc2013c4b44c26bb"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}