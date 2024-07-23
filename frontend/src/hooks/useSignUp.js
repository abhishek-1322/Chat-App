import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/authContext'

export default function useSignUp() {
  const [loading, setLoading] = useState(false)
  const{setCurrentAuthUser}=useAuthContext();
  const signup = async (inputs) => {
    const {firstName,lastName,username,email,password,confirmPassword,gender}=inputs;
    const success=handleErrorInputs(firstName,lastName,username,email,password,confirmPassword,gender);
    if(!success) return;
    try {
      setLoading(true)
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({firstName,lastName,username,email,password,confirmPassword,gender})
      })
      const responseData = await response.json()
      console.log("Signup data",responseData)
      if(responseData.statusCode === 400){
        throw new Error(responseData.message);
      }
      toast.success(responseData.message);
      localStorage.setItem('chat-user', JSON.stringify(responseData.data))
      document.cookie=`id=${responseData.data._id}`;
      setCurrentAuthUser(responseData.data)
    } catch (error) {
      toast.error(error.message);
    }
    finally{
      setLoading(false)
    }
  }
  return (
    {loading,signup:signup}
  )
}


const handleErrorInputs=(firstName,lastName,username,email,password,confirmPassword,gender)=>{
  if(!firstName || !username || !email || !password || !confirmPassword || !gender){
    toast.error("Please fill all the fields");
    return false;
  }
  if(password!==confirmPassword){
    toast.error("Password does not match");
    return false;
  }
  if(password.length<8){
    toast.error("Password must be at least 8 characters");
    return false;
  }
  return true;
}
