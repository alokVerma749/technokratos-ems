import React from 'react'
import EventPage from '../event/[eid]/page';
import EventList from '../eventList';
import AddMember from '../member';
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
  console.log(events)
  return (
    <div className='relative'>
      <p className="flex w-full items-center justify-center font-bold text-indigo-600 border-b-2 pb-2 uppercase text-3xl">Events</p>
      
      <AddMember/>
      <button className='absolute top-14 right-8 py-2 px-4 bg-red-500 text-white font-semibold rounded hover:scale-105 transition-all'>Clear Events</button>
      <div className="flex flex-col my-10 p-0">
        {events?.map((item) => {
          // NOTE for SACHIN: you can use other UI other than tha this card, feel free to use you creativity...
          return <EventList {...item} key={item.id} />
        })}
      </div>
    </div>
  )
}

export default Dashboard
