import React, { useState } from 'react'
import { useConversation } from '../zustand/useConversation.js';
import toast from 'react-hot-toast';

export default function useSendMessage() {
    const [loading, setLoading] = useState(false);
    const {messages,setMessages,selectedConversation}=useConversation();
    console.log("selectedConversation in use Send Message",selectedConversation)
    const sendMessage = async (message) => {
        try {
            setLoading(true)
            const response = await fetch(`/api/messages/sendMessage/${selectedConversation._id}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({message:message})
            })
            const responseData = await response.json()
            console.log("sendMessage data",responseData)
            if(responseData.statusCode === 400){
                throw new Error(responseData.message);
            }
            setMessages([...messages, responseData.data])
        } catch (error) {
            toast.error(error.message);
        }
        finally{
            setLoading(false)
        }
    }

    return { sendMessage, loading }
}
