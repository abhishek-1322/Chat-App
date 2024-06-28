import React from "react";

export default function ChatHeader() {
  return (
    <div className="text-white p-2.5">
      <div className="flex gap-3">
        <div className="avatar online">
          <div className="w-20 rounded-full">
            <img src="https://avatar.iran.liara.run/public/boy?username=Prince" />
          </div>
        </div>
        <div className="text-white text-2xl flex w-full items-center">
          <p>John Doe</p>
        </div>
      </div>
    </div>
  );
}
