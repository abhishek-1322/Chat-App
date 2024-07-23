import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp.js";
import logo from "../../assets/4.png";
export default function Signup() {
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });

  const { loading, signup } = useSignUp();
  const handleSignUp = async (e) => {
    e.preventDefault();
    await signup(inputs);
    console.log(inputs);
  };

  return (
    <div className="flex items-center justify-center max-w-200 mx-auto">
      <div className="p-6 w-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
        <div>
          <img src={logo} alt="logo" className="w-28 mx-auto " />
        </div>
        <form className="h-[600px] overflow-auto md:h-auto" onSubmit={handleSignUp}>
          <div className="mt-5 sm:flex-col md:flex md:flex-row gap-7">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm text-white-400"
              >
                <span className="text-lg font-semibold text-white">
                  First Name
                </span>
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="w-full text-lg px-4 py-2 mt-1 text-black bg-light-gray-800 rounded-md focus:border focus:border-blue-400"
                value={inputs.firstName}
                onChange={(e) => setInputs({ ...inputs, firstName: e.target.value })}
                autocomplete="given-name"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm text-white-400"
              >
                <span className="text-lg font-semibold text-white">
                  Last Name
                </span>
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="w-full text-lg px-4 py-2 mt-1 text-black bg-light-gray-800 rounded-md focus:border focus:border-blue-400"
                value={inputs.lastName}
                onChange={(e) => setInputs({ ...inputs, lastName: e.target.value })}
                autocomplete="family-name"
              />
            </div>
          </div>

          <div className="mt-5 sm:flex-col md:flex md:flex-row gap-7">
            <div>
              <label
                htmlFor="username"
                className="block text-sm text-white-400"
              >
                <span className="text-lg font-semibold text-white">
                  Username
                </span>
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="w-full text-lg px-4 py-2 mt-1 text-black bg-light-gray-800 rounded-md focus:border focus:border-blue-400"
                value={inputs.username}
                onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                autocomplete="username"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-white-400">
                <span className="text-lg font-semibold text-white">Email</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full text-lg px-4 py-2 mt-1 text-black bg-light-gray-800 rounded-md focus:border focus:border-blue-400"
                value={inputs.email}
                onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                autocomplete="email"
              />
            </div>
          </div>

          <div className="mt-5 sm:flex-col md:flex md:flex-row gap-7">
            <div>
              <label
                htmlFor="password"
                className="block text-sm text-white-400"
              >
                <span className="text-lg font-semibold text-white">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full text-lg px-4 py-2 mt-1 text-black bg-light-gray-800 rounded-md focus:border focus:border-blue-400"
                value={inputs.password}
                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                autocomplete="new-password"
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm text-white-400"
              >
                <span className="text-lg font-semibold text-white">
                  Confirm Password
                </span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="w-full text-lg px-4 py-2 mt-1 text-black bg-white rounded-md focus:border focus:border-blue-400"
                value={inputs.confirmPassword}
                onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                autocomplete="new-password"
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="gender" className="block text-sm text-white-400">
              <span className="text-lg font-semibold text-white">Gender</span>
            </label>
            <div className="mt-1 flex gap-2">
              <input type="radio" id="male" name="gender" value="Male"
                onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}
              />
              <label htmlFor="male" className="mr-2 text-white">
                Male
              </label>
              <input type="radio" id="female" name="gender" value="Female"
                onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}
              />
              <label htmlFor="female" className="mr-2 text-white">
                Female
              </label>
            </div>
          </div>

          <div className="mt-3">
            <Link
              to="/login"
              className="text-sm text-white hover:underline hover:text-blue-600 mt-5"
            >
              Already have an account?
            </Link>
          </div>

          <div className="mt-3">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
              disabled={loading}
            >
              {loading ? <span className="loading loading-spinner"></span> : "Signup"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
