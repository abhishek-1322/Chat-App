import React from 'react'
import { IoMdChatboxes } from "react-icons/io";

export default function NoChatSelected() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-2xl'>Welcome &#128075;</h1>
        <p className='text-lg'>Select a chat to start messaging</p>
        <IoMdChatboxes className='text-7xl'/>
    </div>
  )
}
