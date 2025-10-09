import React from "react";
import NoChatSelected from "./NoChatSelected";
import useGetMessages from "../../hooks/useGetMessages";
import { MessageSkeleton } from "../skeleton/MessageSkeleton";
import {Message} from "./Message";
import { useSocketContext } from "../../context/socketContext";
import { useEffect } from "react";

export default function PersonalChat({selectedConversation}) {
  const {messages, setMessages, loading}=useGetMessages();
  console.log("selectedConversation in personal chat",messages)
  const {socket} = useSocketContext();
  useEffect(() => {
    if (!socket) return;
    const handleNewMessage = (message) => {
      console.log("📩 New message received:", message);
      setMessages((prev) => [...prev, message]);
    };

    socket.on("newMessage", handleNewMessage);

    // ✅ Clean up the listener on unmount or socket change
    return () => socket.off("newMessage", handleNewMessage);
  }, [socket, setMessages]);
  return (
    <>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <div className="overflow-auto p-5 h-screen">
          {!loading && messages.length>0 && (
            messages?.map((message) => (
              <Message key={message._id} message={message} />
            ))
          )}
          {loading && (
            <MessageSkeleton/>
          )}
          {!loading && messages.length === 0 && (
            <p className="text-center">Send a message to start the conversation</p>
          )}
        </div>
      )}
    </>
  );
}
