import React from "react";

export default function Conversation() {
  return (
    <>
      <div className="text-white p-3 ">
        <div className="flex gap-3">
          <div className="avatar online">
            <div className="w-10 rounded-full">
              <img src="https://avatar.iran.liara.run/public/boy?username=Prince" />
            </div>
          </div>
          <div className="text-white flex justify-between w-full items-center">
            <p>John Doe</p>
            <span>&#128509;</span>
          </div>
        </div>
      </div>
      <hr className="opacity-50" />
    </>
  );
}
