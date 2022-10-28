import React, {createContext, useState, useEffect} from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'


export  const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    
    // -------------------------
    // googleSignIn PopUp
    // -------------------------
    const googleSignInPopUp = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }


     // -------------------------
    // create user login email & password
    // -------------------------
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }



    // signInWithEmailAndPassword
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    // update profile picture
    const updateProfilePicture = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile)
    }


        // verify email
    const verifyEmail = () => {
        setLoading(true);
        return sendEmailVerification(auth.currentUser)
    }


    // sign out 
    const logOut = () => {
        setLoading(true);
        signOut(auth)
    }
   


    // -------------------------
    // onAuthStateChanged [user tracking kore onAuthState Change er maddome. 
    // এবং এটি jehetu side effect tail useEffect use korte hobe.
    // onsubcribe name akti variable declare korte hobe jate user use sate changed kore sathe sathe onAuthStateChaged
    // muce pela jay]
    // -------------------------
     
    useEffect(() => {
      const unSubcribed =  onAuthStateChanged(auth, (currentUser) => {
            console.log('onAuth state changed is', currentUser);
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser)
            }
            setLoading(false);
      })
        return () => {
            unSubcribed();
      }
    }, [])
    





    const authInfo = {
        user,
        googleSignInPopUp,
        logOut,
        createUser,
        signIn,
        updateProfilePicture,
        verifyEmail,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;