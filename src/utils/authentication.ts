import { auth } from "../config/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"

export const handleSignIn = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);

export const handleSignUp = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);