import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvB9SMxKmfEFFg5QLYpXuAU4RPaO_RSm0",
  authDomain: "blog-f2ca8.firebaseapp.com",
  projectId: "blog-f2ca8",
  storageBucket: "blog-f2ca8.appspot.com",
  messagingSenderId: "837365646423",
  appId: "1:837365646423:web:8fc54cffc9389f954bcf12"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };