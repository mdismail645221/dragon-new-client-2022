import React, {createContext} from 'react';
import app from '../firebase/firebase.config';
import {getAuth} from 'firebase/auth'

const auth = getAuth(app);


const AuthProvider = ({children}) => {


    
    
    const AuthContext = createContext();



    const authInfo = {}

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;