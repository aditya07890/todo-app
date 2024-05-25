import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCii9AQ2W9ilvtK2mzpdbmFe9lse0HTLVg",
  authDomain: "signup-de823.firebaseapp.com",
  projectId: "signup-de823",
  storageBucket: "signup-de823.appspot.com",
  messagingSenderId: "459632961282",
  appId: "1:459632961282:web:57a6ee734b0ec9018e841b",
  measurementId: "G-CTT6PSJVD6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
