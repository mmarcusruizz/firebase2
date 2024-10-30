import { getAuth, signInWithEmailAndPassword,
    createUserWithEmailAndPassword,onAuthStateChanged,
    signOut
} from "firebase/auth";
import firebaseApp from "./FirebaseConfig";
 
const auth = getAuth(firebaseApp);
 
export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut }