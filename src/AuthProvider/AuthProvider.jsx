/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from './../firebase/firebase.config'
import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider } from "firebase/auth";



export const socialContext = createContext(null);

const AuthProvider = ({ children }) => {
    const Googleprovider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    // register part
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // login 
    const LogIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signGoogle = () => {
        setLoader(true)
        return signInWithPopup(auth, Googleprovider)
    }
    //USER
    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, (CurrentUser) => {
            setUser(CurrentUser)
         
            setLoader(false)
        });
        return () => unSubscriber();

    }, [])


    // sign out
    const Logout = () => {
        signOut(auth);



    }

    const authInfo = { createUser, LogIn, Logout, user, loader, setLoader, signGoogle }
    return (

        <socialContext.Provider value={authInfo}>
            {
                children
            }

        </socialContext.Provider>


    );
};

export default AuthProvider;