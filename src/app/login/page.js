'use client'

import { toast } from "@/components/ui/use-toast"
import { AuthContext, SET_CURRENT_AUTH } from "@/context/auth-context"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useContext, useState } from "react"

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const router = useRouter()

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [, dispatch] = useContext(AuthContext)



  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setIsSubmitting(true)

      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      }

      const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/login', options)
      const jsonResponse = await response.json()

      await dispatch({ type: SET_CURRENT_AUTH, payload: { email: jsonResponse.email || '', isAdmin: (jsonResponse.email===process.env.NEXT_PUBLIC_ADMIN_EMAIL) } })

      if (jsonResponse.success) {
        toast({ title: "Success", description: "Login successfully" })
        setUser({
          email: '',
          password: '',
        })
        router.push('/')
      } else {
        toast({ title: "Failed", description: jsonResponse?.message || 'Failed to login' })
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
            <h1 className="text-2xl font-bold text-center text-indigo-600">Login</h1>
            <form onSubmit={handleSubmit} className="space-y-6">

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

              <button type="submit" className="relative inline-block font-medium group py-1.5 px-2.5 w-full  ">
                <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-indigo-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border border-indigo-600 group-hover:bg-indigo-50"></span>
                <span className="relative text-indigo-600 ">Sign In</span>
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
