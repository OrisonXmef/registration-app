import { createContext, } from "react";
import React from 'react';

const authContext =createContext();
AuthProvider = authContext. Provider;

function AuthContextProvider() {


    const[success, setSuccess]= useState("false");    
    const[error, setError]= useState("null");    
    const[loading, setloading]= useState("false");    
    const[user, setUser]= useState("null"); 
    
    // signup function
    const authRegister= async (username,email,password)=>{
      await fetch(url,{
        method: "POST"
      })
    }
  return (
    <div>

    </div>
  )
}

export default AuthContext