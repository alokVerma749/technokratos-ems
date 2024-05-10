import Image from 'next/image';
import React from 'react'

async function fetchEvent(eid) {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/event/${eid}`)
    if (!response.ok) {
      throw new Error("Failed to fetch event");
    }
    const data = await response.json();
    return data
  } catch (error) {
    console.error("Error fetching events:", error);
  }
}

const EventPage = async ({ params }) => {
  const eid = params?.eid
  const event = await fetchEvent(eid) || []
  const { data } = event
  // use this event to render data
  return (
    <div>
      <Image src="" alt="" />
    </div>
  )
}

export default EventPage
