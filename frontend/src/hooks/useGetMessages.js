import React, { useEffect, useState } from "react";
import { useConversation } from "../zustand/useConversation";
import toast from "react-hot-toast";
export default function useGetMessages() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const getMessages = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `/api/messages/${selectedConversation._id}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const responseData = await response.json();
      console.log("getMessages data", responseData);
      if (responseData.statusCode === 400) {
        throw new Error(responseData.message);
      }
      setMessages(responseData.data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedConversation?._id) {
      getMessages();
    }
  }, [selectedConversation?._id, setMessages]);
  return { loading, messages};
}
