// import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCYAcyDsRMLsXIFtnDZFBzYam-tUn4Xwe8",
    authDomain: "netflix-clone-7b618.firebaseapp.com",
    projectId: "netflix-clone-7b618",
    storageBucket: "netflix-clone-7b618.appspot.com",
    messagingSenderId: "441891809315",
    appId: "1:441891809315:web:d0f3f9d7ee3fd1fddda996",
    measurementId: "G-ZETNKHSP2R"
  };

//   firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
export const auth = getAuth(app);

export default storage;