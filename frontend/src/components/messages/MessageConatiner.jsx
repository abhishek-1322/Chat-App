import React from 'react'
import ChatHeader from "./ChatHeader"
import PersonalChat from './PersonalChat'
import SendMessageField from './SendMessageField'

export default function MessageConatiner() {
  return (
    <div className='md:flex flex-col hidden  md:w-4/5 text-white  h-screen bg-light-gray-400 overflow-auto bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <ChatHeader/>
        <hr/>
        <PersonalChat/>
        <SendMessageField/>
    </div>
  )
}
