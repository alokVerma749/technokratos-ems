'use client'

import { toast } from '@/components/ui/use-toast';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const handleLogin = async ({ email, password }) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  }

  try {
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/login', options)

    if (!response.ok) {
      throw new Error('Failed to login')
    }

    const data = await response.json()
    dispatch({ type: SET_CURRENT_AUTH, payload: { email: data.email || '', isAdmin: data.isAdmin } })

  } catch (error) {
    console.error('Error checking user cookie:', error);
  }
}

const Signup = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '', branch: '',
    roll: '',
    year: '',
    branch: ''
  })

  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setIsSubmitting(true)

      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      }
      const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/register', options)
      const jsonResponse = await response.json()
      if (jsonResponse.success) {
        toast({ title: "Success", description: "registered successfully" })
        setUser({
          name: '',
          email: '',
          password: '',
          branch: '',
          roll: '',
          year: '',
          branch: ''
        })
        await handleLogin(user)
        router.push('/')
      } else {
        toast({ title: "Failed", description: jsonResponse?.message || 'Failed to register' })
      }

    } catch (error) {
      toast({ title: "Error", description: "Something went wrong" })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <div className="flex w-full bg-white">
        <Image
          height={4000}
          width={4000}
          src="https://source.unsplash.com/random/1000x1000/?5"
          className="w-1/2 hidden md:block"
          alt="random"
        />
        <div className="flex flex-col w-full items-center justify-center p-5 mx-auto">

          <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
            <h1 className="text-2xl font-bold text-center text-indigo-600">Join Us</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  value={user.name}
                  onChange={(e) => {
                    setUser(prevUser => ({
                      ...prevUser,
                      name: e.target.value
                    }))
                  }}
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
                  value={user.email}
                  onChange={(e) => {
                    setUser(prevUser => ({
                      ...prevUser,
                      email: e.target.value
                    }))
                  }}
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
                  value={user.password}
                  onChange={(e) => {
                    setUser(prevUser => ({
                      ...prevUser,
                      password: e.target.value
                    }))
                  }}
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="password" className="block px-4 dark:text-gray-600">
                  Roll
                </label>
                <input
                  type="roll"
                  name="roll"
                  id="roll"
                  placeholder="Enter your Roll Number"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  value={user.roll}
                  onChange={(e) => {
                    setUser(prevUser => ({
                      ...prevUser,
                      roll: e.target.value
                    }))
                  }}
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="branch" className="block px-4 dark:text-gray-600">
                  Branch
                </label>
                <input
                  type="branch"
                  name="branch"
                  id="branch"
                  placeholder="Enter your branch"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  value={user.branch}
                  onChange={(e) => {
                    setUser(prevUser => ({
                      ...prevUser,
                      branch: e.target.value
                    }))
                  }}
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="password" className="block px-4 dark:text-gray-600">
                  Year
                </label>
                <input
                  type="year"
                  name="year"
                  id="year"
                  placeholder="Enter your year"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  value={user.year}
                  onChange={(e) => {
                    setUser(prevUser => ({
                      ...prevUser,
                      year: e.target.value
                    }))
                  }}
                />
              </div>

              <button type='submit' className="relative inline-block font-medium group py-1.5 px-2.5 w-full">
                <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-indigo-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border border-indigo-600 group-hover:bg-indigo-50"></span>
                <span className="relative text-indigo-600 ">Sign Up</span>
              </button>
            </form>
            <p className="text-xs text-center sm:px-6 dark:text-gray-600">
              Already have an account?{' '}
              <Link
                rel="noopener noreferrer"
                href="/login"
                className="underline dark:text-gray-800"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
