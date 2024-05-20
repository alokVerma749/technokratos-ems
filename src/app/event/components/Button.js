'use client'

import { toast } from '@/components/ui/use-toast'
import { AuthContext } from '@/context/auth-context'
import { useContext, useState } from 'react'

function Button({ eid, data }) {
  const [{ email }] = useContext(AuthContext)
  const [isAlreadySubscribed, setIsAlreadySubscribed] = useState(data.participants?.includes(email) || false)

  const handleRegister = async () => {

    if (!email) {
      toast({ title: "Warning", description: "Please Login first!" })
      return
    }

    try {
      const response = await fetch('/api/event/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ eid, email }),
      })

      const result = await response.json()

      if (result.success) {
        toast({ title: "Success", description: "Registration successful!" })
        setIsAlreadySubscribed(true)
      } else {
        toast({ title: "Warning", description: "Registration failed:" + result.message })
      }
    } catch (error) {
      console.error("Error registering:", error)
      toast({ title: "Failure", description: "An error occurred during registration." })

    }
  }
  return (
    <button
      type="button"
      className={`ml-8 py-2 px-5 me-2 mt-4 mb-2 text-lg border-black font-medium ${isAlreadySubscribed ? 'text-gray-400' : 'text-gray-900'} focus:outline-none bg-white rounded-lg border ${isAlreadySubscribed ? 'hover:bg-gray-100 hover:text-gray-400' : 'hover:bg-gray-100 hover:text-blue-700'}  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 hover:scale-105 transition-all`}
      onClick={handleRegister}
      disabled={isAlreadySubscribed}
    >
      {isAlreadySubscribed ? 'Registered' : 'Register'}
    </button>
  )
}

export default Button
