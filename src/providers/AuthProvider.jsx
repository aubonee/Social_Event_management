import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth,signInWithPopup ,onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

import app from "../firebase/firebase.config";
import { useLocation } from 'react-router-dom';


export const AuthContext = createContext(null);


import { GoogleAuthProvider } from "firebase/auth";

const AuthProvider = ({children}) => {
    const auth =getAuth(app)
    
    const[user,setUser] =useState(null);
    const [loading ,setloading]=useState(true)

    const createUser =(email, password) =>{
        setloading(true);
             return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn=(email, password) =>{
        setloading(true);
        return signInWithEmailAndPassword(auth,email,password);    }
    
        
       
        const googleSignIn=() =>{
            const provider = new GoogleAuthProvider();
           
            // .then((result) => {
                
            //     const loggedInUser = result.user;
            //     console.log(loggedInUser);
            //     setUser(loggedInUser);
              
            //   })
            //   .catch((error) => {
            //     console.error(error);
            // });
            setloading(true);
            return      signInWithPopup (auth, provider)  }
        
    const logOut =()=>{
        setloading(true);
        return signOut(auth);
    }
    useEffect(()=>{
    const  unSubscribe =  onAuthStateChanged(auth,currentUser => {
           console.log('auth state changed', currentUser)
           setUser(currentUser);
           setloading(false);

      });
      return () =>{
        unSubscribe ();

      }
          
    }, [])

    const authInfo ={
        user, loading, createUser,googleSignIn,signIn,logOut
    }
    return (
        
           <AuthContext.Provider value={authInfo}>
                  {children}
           </AuthContext.Provider>
        
    );
};

export default AuthProvider;