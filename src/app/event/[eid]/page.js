import React from 'react'

const EventPage = ({ params }) => {
  const eid = params.eid
  // fetch data using eid and the render it
  return (
    <div>EventPage{eid}</div>
  )
}

export default EventPage
