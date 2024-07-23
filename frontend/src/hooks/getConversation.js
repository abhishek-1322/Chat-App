import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

export default function getConversation() {
  const [loading, setLoading] = useState(true);
  const [conversations, setConversations] = useState([]);

  const getAllConversation = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/users', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
      const responseData = await response.json()
      if(responseData.statusCode === 400){
        throw new Error(responseData.message);
      }
      setConversations(responseData.data)
    } catch (error) {
      toast.error(error.message);
    }
    finally{
      setLoading(false)
    }
  }
  console.log("conversations",conversations)
  useEffect(() => {
    getAllConversation();
  }, []);

  return { loading, conversations }
}
