import React from "react";

export default function Signup() {
  return (
    <div className="flex items-center justify-center max-w-200 mx-auto">
      <div className=" p-6 w-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
        <h1 className="text-4xl font-semibold text-white text-center">
          Sign Up
        </h1>
        <form className="mt-6">
          <div className="mt-5 flex gap-7">
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
                type="firstName"
                name="firstName"
                id="firstName"
                className="w-full text-lg px-4 py-2 mt-1 text-black bg-light-gray-800 rounded-md focus:border focus:border-blue-400"
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
                type="lastName"
                name="lastName"
                id="lastName"
                className="w-full text-lg px-4 py-2 mt-1 text-black bg-light-gray-800 rounded-md focus:border focus:border-blue-400"
              />
            </div>
          </div>

          <div className="mt-5 flex gap-7">
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
                type="username"
                name="username"
                id="username"
                className="w-full text-lg px-4 py-2 mt-1 text-black bg-light-gray-800 rounded-md focus:border focus:border-blue-400"
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
              />
            </div>
          </div>

          <div className="mt-5 flex gap-7">
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
                id="Password"
                className="w-full text-lg px-4 py-2 mt-1 text-black bg-light-gray-800 rounded-md focus:border focus:border-blue-400"
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
                type="confirmPassword"
                name="confirmPassword"
                id="confirmPassword"
                className="w-full text-lg px-4 py-2 mt-1  text-black bg-white rounded-md focus:border focus:border-blue-400"
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="gender" className="block text-sm text-white-400">
              <span className="text-lg font-semibold text-white">Gender</span>
            </label>
            <div className="mt-1 flex gap-2">
              <input type="radio" id="male" name="gender" value="Male" />
              <label for="male" className="mr-2 text-white">
                Male
              </label>
              <input type="radio" id="female" name="gender" value="Female" />
              <label for="female" className="mr-2 text-white">
                Female
              </label>
            </div>
          </div>

          <div className="mt-3">
            <a
              href="#"
              className="text-sm text-white hover:underline hover:text-blue-600 mt-5"
            >
              Already have an account?
            </a>
          </div>

          <div className="mt-3">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
