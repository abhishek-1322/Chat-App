import React from "react";
import { useConversation } from "../../zustand/useConversation.js";

export default function Conversation({conversation, lastIdx}) {
  console.log("inside converstaion",conversation,lastIdx)
  const { selectedConversation,setSelectedConversation } = useConversation();
  const isSelected= conversation?._id === selectedConversation?._id;
  console.log( "isSelected",isSelected)
  return (
    <>
      <div className={`text-white p-3 hover:bg-sky-500 cursor-pointer 
      ${isSelected ? "bg-sky-500" : ""}`}
      onClick={() => setSelectedConversation(conversation)}>
        <div className="flex gap-3">
          <div className="avatar online">
            <div className="w-10 rounded-full">
              <img src={conversation?.profilePic} />
            </div>
          </div>
          <div className="text-white flex justify-between w-full items-center">
            <p>{conversation?.fullName}</p>
            <span>&#128509;</span>
          </div>
        </div>
      </div>
      {!lastIdx && <hr className="opacity-50" />}
    </>
  );
}
