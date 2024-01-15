import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
const auth = getAuth(app);
import app from "../../firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null);
    const [loading,setloading]= useState(true);

    const createUser=(email,password)=>{
        setloading(true);
        return createUserWithEmailAndPassword(auth,email,password)}

        const signIn = (email,password)=>{
          setloading(true);
          return signInWithEmailAndPassword(auth,email,password)
      }

      const logout = ()=>{
        setloading(true)
        return signOut(auth)
    }

    useEffect(()=>{
      const unSubscribe =onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            console.log('Current user',currentUser)
            setloading(false)
        })
        return()=>{
          return unSubscribe();
        }
    },[])

    const userInfo = {
        user,
       loading,
       createUser,
     signIn,
     logout,

    }

  return (
    <AuthContext.Provider value={userInfo}>

    {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider