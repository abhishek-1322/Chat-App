import React, { useEffect, useState } from 'react'
import SideBar from '../../components/sidebar/SideBar'
import MessageConatiner from '../../components/messages/MessageConatiner'

export const Home = () => {
const [sideBarUser, setSideBarUser] = useState([]);

const getSideBarUser = async () => {
    const response = await fetch(`http://localhost:8081/api/users`);
    const data = await response.json();
    console.log("data",data)
    setSideBarUser(data);
}
console.log("sideBarUser",sideBarUser)
useEffect(() => {
    // getSideBarUser();
},[]);
  return (
    <div className='md:flex items-center w-full '>
        <SideBar/>
        <MessageConatiner/>
    </div>

  )
}
