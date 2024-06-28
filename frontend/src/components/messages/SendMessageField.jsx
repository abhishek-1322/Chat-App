import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'

export default function SendMessageField() {
  return (
    <form className='w-full position-sticky bottom-0'>
        <div className='flex items-center gap-4 p-5'>
            <input type="text" placeholder='Send a message' className='bg-light-gray-800 text-lg px-4 py-2 mt-1 text-black bg-light-gray-800 w-full rounded-full focus:border focus:border-blue-400'/>
            <button className='bg-light-gray-800 text-lg px-4 py-2 mt-1 text-white bg-sky-400 btn-circle focus:border focus:border-blue-400'><FaPaperPlane /></button>
        </div>
    </form>
  )
}
