import React, { useEffect } from 'react'
import ChatHeader from "./ChatHeader"
import PersonalChat from './PersonalChat'
import SendMessageField from './SendMessageField'
import { useConversation } from '../../zustand/useConversation.js'

export default function MessageConatiner() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  // =======clean up function for selectedConverstaion state while login ========
  useEffect(() => {
    return ()=>setSelectedConversation(null)
  },[setSelectedConversation])
  return (
    <div className='md:flex flex-col hidden  md:w-4/5 text-white  h-screen bg-light-gray-400 overflow-auto bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        {selectedConversation && <ChatHeader selectedConversation={selectedConversation}/>}
        <hr/>
        <PersonalChat selectedConversation={selectedConversation}/>
        <SendMessageField/>
    </div>
  )
}
