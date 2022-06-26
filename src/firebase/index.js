import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAcAA8AFULWacjgHkBlp8alL0Ly8JvLsZM",
    authDomain: "responsimikro.firebaseapp.com",
    databaseURL: "https://responsimikro-default-rtdb.firebaseio.com",
    projectId: "responsimikro",
    storageBucket: "responsimikro.appspot.com",
    messagingSenderId: "165338116429",
    appId: "1:165338116429:web:c5146567f78055598d8704"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        if (err.code === "auth/") {
            return {
                success: false,
                message: "Pos-el atau Kata sandi salah!",
            };
        }
        else {
            return {
                success: false,
                message: "Terjadi kesalahan!",
            };
        }
    }
};

const registerWithEmailAndPassword = async (name, username, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            username: username,
            authProvider: "local",
            email,
        });
    } catch (err) {
        console.error(err);
    }
};

const logout = () => {
    signOut(auth);
};

export {
    auth,
    db,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout,
}
