import React from 'react'
import SearchInput from './SearchInput'
import Conversation from './Conversation'
import Logout from './Logout'
import getConversation from '../../hooks/getConversation'

export default function SideBar() {
  const{ loading, conversations }=getConversation();
  console.log("conversations123",conversations)
  return (
    <>
    <div className='w-auto border-r-2 text-white h-screen bg-light-gray-400 overflow-auto bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <SearchInput/>
        <hr className='p-2'/>
        <div className='overflow-auto'>
          {conversations.map((conversation,idx) => (
            <Conversation 
            key={conversation._id} 
            conversation={conversation} 
            lastIdx={idx === conversations.length - 1}/>
          ))}
          {loading ? <span className='loading loading-spinner'></span> : null}
        </div>
        <Logout/>
    </div>
    
    </>
  )
}
