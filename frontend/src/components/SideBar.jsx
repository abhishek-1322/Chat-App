import React from 'react'
import SearchInput from './SearchInput'
import Conversation from './Conversation'

export default function SideBar() {
  return (
    <div className='flex flex-col text-white border-r border-slate-500 p-2 h-full'>
        <SearchInput/>
        <hr className="p-2"/>
        {/* <div className='divider px-3'></div> */}
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        
    </div>
  )
}
