import React from 'react'
import SearchInput from './SearchInput'
import Conversation from './Conversation'
import Logout from './Logout'

export default function SideBar() {
  return (
    <>
    <div className='w-auto border-r-2 text-white h-screen bg-light-gray-400 overflow-auto bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <SearchInput/>
        <hr className='p-2'/>
        <div className='overflow-auto'>
          <Conversation/>
          <Conversation/>
        </div>
        <Logout/>
    </div>
    
    </>
  )
}
