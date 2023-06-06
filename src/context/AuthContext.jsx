import React, { createContext, useContext, useState } from 'react'
import { v4 as uuidv4 } from "uuid"
export const AuthContext = createContext('')
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState('')
    const token = uuidv4()
    // console.log(token);

    const login = () => {
        localStorage.setItem("auth_token", token)
         setAuth(token)
    }
console.log(auth,"==auth in auth context");
    const logout = () => {
        localStorage.removeItem("auth_token")
        setAuth('')
    }
    return ( <AuthContext.Provider value={{ auth, login, logout,setAuth }}>
        {children}
    </AuthContext.Provider>
    )
}

export const useAuth=()=>{
    return useContext(AuthContext)
}