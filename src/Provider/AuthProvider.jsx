import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
const auth = getAuth(app);
import app from "../../firebase.config";

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null);
    const [loading,setloading]= useState(true);

    const createUser=(email,password,name,imgUrl)=>{
        setloading(true);
        return createUserWithEmailAndPassword(auth,email,password,name,imgUrl);  }
    const userInfo = {
        user,
       loading,
       createUser,

    }

  return (
    <AuthContext.Provider value={userInfo}>

   b    {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider