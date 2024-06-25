import React, { useEffect, useState } from 'react'
import SideBar from '../../components/SideBar'
import MessageConatiner from '../../components/MessageConatiner'

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
    <div className="flex gap-5 justify-center text-white sm:max-h-[450px] md:max-h-[550px] bg-light-gray-400 overflow-auto bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <SideBar/>
        <MessageConatiner/>
    </div>
  )
}
