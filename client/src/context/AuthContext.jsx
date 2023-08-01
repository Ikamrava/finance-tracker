import { useState } from 'react';
import { useContext,createContext, useEffect } from "react";
import {GoogleAuthProvider,getAuth,signInWithPopup} from 'firebase/auth'
import {auth} from "../firebase"



const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const [user,setUser] = useState({})
    
 const googleSingIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth,provider)
 }

 const signOut = () => {
    auth.signOut()
 }

 useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user)
    });
    return ()=>{
      unsubscribe()
    };
  },[])


  return (
    <AuthContext.Provider value={{googleSingIn,signOut,user}}>
      {children}
    </AuthContext.Provider>
  );
}

export const UserAuth = () => {
    return useContext(AuthContext);
}