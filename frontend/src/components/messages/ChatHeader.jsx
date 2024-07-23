import React from "react";
import { useConversation } from "../../zustand/useConversation";

export default function ChatHeader({selectedConversation}) {
  console.log("selectedConversation",selectedConversation)
  return (
    <div className="text-white p-2.5">
      <div className="flex gap-3">
        <div className="avatar online">
          <div className="w-20 rounded-full">
            <img src={selectedConversation?.profilePic} />
          </div>
        </div>
        <div className="text-white text-2xl flex w-full items-center">
          <p>{selectedConversation?.fullName}</p>
        </div>
      </div>
    </div>
  );
}
