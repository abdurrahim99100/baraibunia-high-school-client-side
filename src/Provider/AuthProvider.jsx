import { createContext, useEffect, useState } from "react";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    // create a new user;
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // update a user profile;
    const updateUserProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        });
    };


    // signIn user;
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logOut user;
    const logOutUser = () => {
        return signOut(auth);
    }

    // google signIn;
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // facebook signIn;
    const facebookProvider = new FacebookAuthProvider();
    const facebookSignIn = () => {
        return signInWithPopup(auth, facebookProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log("current user is ready", currentUser);
        })
        return () => {
            return unsubscribe();
        }
    }, []);

    const authInfo = {
        loading,
        createUser,
        updateUserProfile,
        signInUser,
        user,
        logOutUser,
        googleSignIn,
        facebookSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;