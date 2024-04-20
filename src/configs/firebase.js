
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyAmtmcG2daTD1TKwTu62MrCuJtSx4PIbwQ",
  authDomain: "activity5-6-96211.firebaseapp.com",
  projectId: "activity5-6-96211",
  storageBucket: "activity5-6-96211.appspot.com",
  messagingSenderId: "867049629786",
  appId: "1:867049629786:web:db9d1c5dd58e3a240e1063",
  measurementId: "G-2429W98JN5"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();


export const db = getFirestore(app);


export const storage = getStorage(app);
