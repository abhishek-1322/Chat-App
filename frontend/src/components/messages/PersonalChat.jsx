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
      console.log('handleNewMessage: 16====', message);
      setMessages([...messages, message]);
        // if (message.receiverId === selectedConversation._id || message.senderId === selectedConversation._id) {
        //     setMessages(prev => [...messages, message]);
        // }
    };
    socket.on('newMessage', handleNewMessage);
    // return () => socket.off('newMessage', handleNewMessage);
  }, [socket, selectedConversation, setMessages]);
  
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
