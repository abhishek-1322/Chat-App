import React, { useState } from 'react'
import { useAuthContext } from '../context/authContext';
import toast from 'react-hot-toast';

export default function useLogout() {
  const [loading, setLoading] = useState(false);

  const {setCurrentAuthUser}=useAuthContext();

  const logout = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })
      const responseData = await response.json()
      console.log("Logout data",responseData)
      if(responseData.statusCode === 400){
        throw new Error(responseData.message);
      }
      toast.success(responseData.message);
      localStorage.removeItem('chat-user');
      setCurrentAuthUser(null);
    } catch (error) {
      toast.error(error.message);
    }
    finally{
      setLoading(false)
    }
  }

  return { logout, loading }
}
