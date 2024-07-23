import React, { useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import useSendMessage from '../../hooks/useSendMessage';

export default function SendMessageField() {
  const [message, setMessage] = useState('');
  const { loading, sendMessage } = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage('');

  }
  return (
    <form className='w-full position-sticky bottom-0' onSubmit={handleSubmit}>
      <div className='flex items-center gap-4 p-5'>
        <input
          type="text"
          placeholder='Send a message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className='bg-light-gray-800 text-lg px-4 py-2 mt-1 text-black bg-light-gray-800 w-full rounded-full focus:border focus:border-blue-400' />
        {
          loading ? <span className='loading loading-spinner'></span> :
            <button className='bg-light-gray-800 text-lg px-4 py-2 mt-1 text-white bg-sky-400 btn-circle focus:border focus:border-blue-400'><FaPaperPlane /></button>
        }
      </div>
    </form>
  )
}
