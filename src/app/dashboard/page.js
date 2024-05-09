import EventCard from '@/components/EventCard'
import React from 'react'


async function fetchEvents() {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/getevents', {
      method: 'GET',
      next: {
        revalidate: 0
      }
    })
    if (!response.ok) {
      throw new Error('Failed to fetch events')
    }
    const data = await response.json()
    return data.events
  } catch (error) {
    console.error('Error fetching events:', error)
  }
}

const Dashboard = async () => {
  /**
   * 1. add Delete button to all events
   * 
   */
  const events = await fetchEvents() || []

  return (
    <div>
      <p className="flex w-full items-center justify-center font-bold text-indigo-600 border-b-2 pb-2 uppercase text-3xl">Our Events</p>
      <div className="flex flex-col md:flex-row flex-wrap justify-start items-center space-x-10 p-0 md:p-10">
        {events?.map((item) => {
          // NOTE for SACHIN: you can use other UI other than tha this card, feel free to use you creativity...
          return <EventCard {...item} key={item.id} />
        })}
      </div>
    </div>
  )
}

export default Dashboard
