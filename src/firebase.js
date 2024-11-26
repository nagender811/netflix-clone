import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyB9pFqUTtw7-gNrGynuSD0Mgr4wKRInfHQ",
  authDomain: "netflix-clone-5798f.firebaseapp.com",
  projectId: "netflix-clone-5798f",
  storageBucket: "netflix-clone-5798f.firebasestorage.app",
  messagingSenderId: "588002645952",
  appId: "1:588002645952:web:c78eccffbe310f7afada25",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const login = async (email, password) => {
  {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
      toast.error(error.code.split("/")[1].split("-").join(" "));
    }
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, login, signup, logout };
