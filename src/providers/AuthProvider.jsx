import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null);

const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (cuser, name, photo)=>{
        return updateProfile(cuser,name, photo)
    }
    //google
    const createUserByGoogle = (auth, provider)=>{
        return signInWithPopup(auth, provider)
    }
    //github
    const createUserByGithub = (auth, provider) =>{
        return signInWithPopup(auth, provider)
    }
    const logOut = ()=>{
        return signOut(auth)
    }
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,loggedUser =>{
        //    console.log('login user inside auth observer')
           setUser(loggedUser);
           setLoading(false)
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        updateUser,
        createUserByGoogle,
        createUserByGithub,
        logOut
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;