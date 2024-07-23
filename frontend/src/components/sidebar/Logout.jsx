import React from 'react';
import { TbLogout2 } from "react-icons/tb";
import useLogout from '../../hooks/useLogout';

export default function Logout() {
  const {loading,logout}=useLogout();
  return (
    <div className='flex items-center gap-2 cursor-pointer bg-sky-400 opacity-90 p-4 fixed bottom-0 w-full'>
      {
        loading ? <span className='loading loading-spinner'></span> : <div onClick={logout} className='flex items-center gap-2'><TbLogout2 className='text-4xl'/><span className='text-lg'>Logout</span></div>
      }
    </div>
  )
}
