import React from 'react';
import { FaSearch } from "react-icons/fa";

export default function SearchInput() {
  return (
    <form className='flex items-center gap-4 p-6 position-sticky top-0 w-full'>
        <input type="text" placeholder='Search' className='bg-light-gray-800 text-lg w-full px-4 py-2 mt-1 text-black bg-light-gray-800 rounded-full focus:border focus:border-blue-400'/>
        <button className='bg-light-gray-800 text-lg px-4 py-2 mt-1 text-white bg-sky-400 btn-circle focus:border focus:border-blue-400'><FaSearch /></button>
    </form>
  )
}
