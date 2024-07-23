import React from "react";
import NoChatSelected from "./NoChatSelected";
import useGetMessages from "../../hooks/useGetMessages";
import { MessageSkeleton } from "../skeleton/MessageSkeleton";
import {Message} from "./Message";

export default function PersonalChat({selectedConversation}) {
  const {messages,loading}=useGetMessages();
  console.log("selectedConversation in personal chat",messages)
  return (
    <>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <div className="overflow-auto p-5 h-screen">
          {!loading && messages.length>0 && (
            messages.map((message) => (
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
