import React from 'react'

const Signup = () => {
  return (
    <>
      <div className="flex h-screen w-full bg-white">
        <img
          src="https://source.unsplash.com/random/1000x1000/?5"
          className="w-1/2 hidden md:block"
          alt="random"
        />
        <div className="flex flex-col w-full items-center justify-center p-5 mx-auto">
          <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
            <h1 className="text-2xl font-bold text-center text-indigo-600">Join Us</h1>
            <form noValidate="" action="" className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block px-4 dark:text-gray-600">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter your Name"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="email" className="block px-4 dark:text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your Email ID"
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
                  placeholder="Enter your Password"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="confirmPassword" className="block px-4 dark:text-gray-600">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm Your Password"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
              </div>
              <button className="relative inline-block font-medium group py-1.5 px-2.5 w-full">
                <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-indigo-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border border-indigo-600 group-hover:bg-indigo-50"></span>
                <span className="relative text-indigo-600 ">Sign Up</span>
              </button>
            </form>
            <p className="text-xs text-center sm:px-6 dark:text-gray-600">
              Already have an account?{' '}
              <a
                rel="noopener noreferrer"
                href="#"
                className="underline dark:text-gray-800"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
