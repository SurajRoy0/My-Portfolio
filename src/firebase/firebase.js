import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCyI3xvLMDqyJZB1MnzyI0-XgF8UN4WBCo",
  authDomain: "my-portfolio-42dfd.firebaseapp.com",
  projectId: "my-portfolio-42dfd",
  storageBucket: "my-portfolio-42dfd.appspot.com",
  messagingSenderId: "26685792256",
  appId: "1:26685792256:web:5493ae50bd47022462f8e5",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
