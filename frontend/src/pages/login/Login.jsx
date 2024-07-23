import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import logo from "../../assets/4.png";

export default function Login() {
    const [inputs,setInputs]=useState({
        username:'',
        password:''
    })

    const {loading,login}=useLogin();
    const handleLogin=async(e)=>{
        e.preventDefault();
        await login(inputs);
        console.log(inputs)
    }
    return (
        <div className="flex items-center justify-center max-w-96 mx-auto">
            <div className=" p-6 w-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
                <div>
                    <img src={logo} alt="logo" className="w-28 mx-auto "/>
                </div>
                <form className="mt-6" onSubmit={handleLogin}>
                    <div>
                        <label
                            htmlFor="username"
                            className="block text-sm text-white-400"
                        >
                            <span className="text-lg font-semibold text-white">Username</span> 
                        </label>
                        <input
                            type="username"
                            name="username"
                            id="username"
                            placeholder="Username"
                            className="w-full text-lg px-4 py-2 mt-1 text-black bg-light-gray-800 rounded-md focus:border focus:border-blue-400"
                            value={inputs.username}
                            onChange={(e)=>setInputs({...inputs,[e.target.name]:e.target.value})}
                        />
                    </div>
                    <div className="mt-5">
                        <label
                            htmlFor="password"
                            className="block text-sm text-white-400"
                        >
                            <span className="text-lg font-semibold text-white">Password</span> 
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="w-full text-lg px-4 py-2 mt-1  text-black bg-white rounded-md focus:border focus:border-blue-400"
                            value={inputs.password}
                            onChange={(e)=>{setInputs({...inputs,[e.target.name]:e.target.value})}}/>
                    </div>
                    <div className="mt-3">
                        <Link to={"/signup"} className="text-sm text-white hover:underline hover:text-blue-600 mt-5">Don't have an account?</Link>
                    </div>
                    <div className="mt-3">
                        <button
                            type="submit"
                            className="w-full px-4 py-2 traking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
                            disabled={loading}
                        >
                            {loading ? <span className="loading loading-spinner"></span> : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
