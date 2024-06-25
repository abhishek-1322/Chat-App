import React from "react";

export default function Login() {
    return (
        <div className="flex items-center justify-center min-w-96 mx-auto">
            <div className=" p-6 w-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
                <h1 className="text-4xl font-semibold text-white text-center">Login</h1>
                <form className="mt-6">
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
                            className="w-full text-lg px-4 py-2 mt-1 text-black bg-light-gray-800 rounded-md focus:border focus:border-blue-400"/>
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
                            className="w-full text-lg px-4 py-2 mt-1  text-black bg-white rounded-md focus:border focus:border-blue-400"/>
                    </div>
                    <div className="mt-3">
                        <a href="#" className="text-sm text-white hover:underline hover:text-blue-600 mt-5">Don't have an account?</a>
                    </div>
                    <div className="mt-3">
                        <button
                            type="submit"
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
