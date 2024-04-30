'use client'

import { toast } from '@/components/ui/use-toast';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const CreateEvent = () => {
  const [event, setEvent] = useState({
    name: '',
    participants: [],
    description: '', 
    timing: '',
    venue: '',
    type: '',
    fee: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  console.log(event);

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setIsSubmitting(true)

      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event)
      }
      const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/event', options)
      const jsonResponse = await response.json()
      if (jsonResponse.success) {
        toast({ title: "Success", description: "registered successfully" })
        setEvent({
          name: '',
          participants: [],
          description: '', 
          timing: '',
          venue: '',
          type: '',
          fee: ''
        })
      } else {
        toast({ title: "Failed", description: jsonResponse?.message || 'Failed to register' })
      }

    } catch (error) {
      console.log(error)
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
          <h1 className="text-2xl font-bold text-center text-indigo-600">Create Event</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="eventName" className="block px-4 dark:text-gray-600">
                Event Name
              </label>
              <input
                type="text"
                name="eventName"
                id="eventName"
                placeholder="Enter Event Name"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                value={event.name}
                onChange={(e) => {
                  setEvent((prevEvent) => ({
                    ...prevEvent,
                    name: e.target.value
                  }));
                }}
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="eventDescription" className="block px-4 dark:text-gray-600">
                Event Description
              </label>
              <textarea
                name="eventDescription"
                id="eventDescription"
                placeholder="Enter Event Description"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                value={event.description}
                onChange={(e) => {
                  setEvent((prevEvent) => ({
                    ...prevEvent,
                    description: e.target.value
                  }));
                }}
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="eventVenue" className="block px-4 dark:text-gray-600">
                Event Venue
              </label>
              <input
                type="text"
                name="eventVenue"
                id="eventVenue"
                placeholder="Enter Event Venue"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                value={event.venue}
                onChange={(e) => {
                  setEvent((prevEvent) => ({
                    ...prevEvent,
                   venue: e.target.value
                  }));
                }}
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="eventFee" className="block px-4 dark:text-gray-600">
                Event Fee
              </label>
              <input
                type="text"
                name="eventFee"
                id="eventFee"
                placeholder="Enter Event Fee"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                value={event.fee}
                onChange={(e) => {
                  setEvent((prevEvent) => ({
                    ...prevEvent,
                    fee: e.target.value
                  }));
                }}
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="eventTime" className="block px-4 dark:text-gray-600">
                Event Time
              </label>
              <input
                type="text"
                name="eventTime"
                id="eventTime"
                placeholder="Enter Event Time"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                value={event.timing}
                onChange={(e) => {
                  setEvent((prevEvent) => ({
                    ...prevEvent,
                    timing: e.target.value
                  }));
                }}
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="eventType" className="block px-4 dark:text-gray-600">
                Event Type (Solo/Group)
              </label>
              <select
                name="eventType"
                id="eventType"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                value={event.type}
                onChange={(e) => {
                  setEvent((prevEvent) => ({
                    ...prevEvent,
                    type: e.target.value
                  }));
                }}
              >
                <option value="solo">Solo</option>
                <option value="group">Group</option>
              </select>
            </div>

            <button type="submit" className="relative inline-block font-medium group py-1.5 px-2.5 w-full">
              <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-indigo-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border border-indigo-600 group-hover:bg-indigo-50"></span>
              <span className="relative text-indigo-600 ">Create Event</span>
            </button>
          </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateEvent;
