import React, { useState } from 'react'
import { useAuthContext } from '../context/authContext';
import toast from 'react-hot-toast';

export default function useLogin() {
  const [loading, setLoading] = useState(false)
  const {setCurrentAuthUser}=useAuthContext();
  const login=async(inputs)=>{
    const {username,password}=inputs;
    const success=handleErrorInputs(username,password);
    if(!success) return;
    try {
      setLoading(true)
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username,password})
      })
      const responseData = await response.json()
      console.log("Login data",responseData)
      if(responseData.statusCode === 400){
        throw new Error(responseData.message);
      }
      toast.success(responseData.message);
      localStorage.setItem('chat-user', JSON.stringify(responseData.data))
      setCurrentAuthUser(responseData.data)
    } catch (error) {
      toast.error(error.message);
    }
    finally{
      setLoading(false)
    }
  }
  return {login,loading}
}

const handleErrorInputs=(username,password)=>{
  if(!username || !password ){
    toast.error("Please fill all the fields");
    return false;
  }
  return true;
}