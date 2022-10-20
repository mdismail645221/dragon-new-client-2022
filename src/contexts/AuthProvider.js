import React, {createContext, useState, useEffect} from 'react';
import app from '../firebase/firebase.config';
import {getAuth, onAuthStateChanged, signInWithPopup} from 'firebase/auth'


export  const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    
    // -------------------------
    // googleSignIn PopUp
    // -------------------------
    const googleSignInPopUp = (provider) => {
        return signInWithPopup(auth, provider);
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
            setUser(currentUser)
      })
        return () => {
            unSubcribed();
      }
    },[])



    const authInfo = {user, googleSignInPopUp}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;