// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCX3NxhkAVpbsxKvWkKgWDFQOtAIP_lfEg",
    authDomain: "my-techpro.firebaseapp.com",
    projectId: "my-techpro",
    storageBucket: "my-techpro.appspot.com",
    messagingSenderId: "62879283982",
    appId: "1:62879283982:web:8a149213d503c2466c355f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)