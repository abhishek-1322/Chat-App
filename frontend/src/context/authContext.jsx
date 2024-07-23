import React, { createContext, useContext, useState } from 'react'

export const AuthContext=createContext();
export  const AuthContextProvider=({children})=>{

    const [currentAuthUser,setCurrentAuthUser]=useState(JSON.parse(localStorage.getItem('chat-user')) || null);

    return (
        <AuthContext.Provider value={{currentAuthUser,setCurrentAuthUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext=()=>{
    return useContext(AuthContext)
}