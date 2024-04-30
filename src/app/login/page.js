'use client'

import Image from "next/image"
import Link from "next/link"
import React from "react"

const Login = () => {
  return (
    <>
      <div className="flex h-screen w-full bg-white">
        <Image
          height={4000}
          width={4000}
          src="https://source.unsplash.com/random/1000x1000/?5"
          className="w-1/2 hidden md:block"
          alt="random"
        />
        <div className="flex flex-col w-full items-center justify-center p-5 mx-auto">
          <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
            <h1 className="text-2xl font-bold text-center text-indigo-600">Login</h1>
            <form noValidate="" action="" className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block px-4 dark:text-gray-600">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter your Username"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="password" className="block px-4 dark:text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Your Password"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
                <div className="flex justify-end text-xs dark:text-gray-600">
                  <a rel="noopener noreferrer" href="#">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <button class="relative inline-block font-medium group py-1.5 px-2.5 w-full  ">
                <span class="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-indigo-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white border border-indigo-600 group-hover:bg-indigo-50"></span>
                <span class="relative text-indigo-600 ">Sign In</span>
              </button>
            </form>
            <p className="text-xs text-center sm:px-6 dark:text-gray-600">
              Dont have an account?
              <Link
                rel="noopener noreferrer"
                href="/signup"
                className="underline dark:text-gray-800"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
