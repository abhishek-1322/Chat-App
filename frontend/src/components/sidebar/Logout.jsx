import React from 'react';
import { TbLogout2 } from "react-icons/tb";

export default function Logout() {
  return (
    <div className='flex items-center gap-2 cursor-pointer bg-sky-400 opacity-90 p-4 fixed bottom-0 w-full'>
        <TbLogout2 className='text-4xl'/><span>Logout</span>
    </div>
  )
}
