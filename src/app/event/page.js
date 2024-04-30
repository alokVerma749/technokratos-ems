'use client'
import EventCard from '@/components/EventCard'
import { Description } from '@radix-ui/react-toast'
import React, { useState } from 'react'

const Event = () => {
  const [countParticipants, setCountParticipants] =useState (0);
  const events=[
    {
      id:1,
      name:"Debate",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores provident voluptate, laudantium rem vel nemo ipsa reprehenderit itaque nisi accusantium, velit fugit architecto quis, sunt consequuntur molestias cum non modi?",
      noOfMember:1,
      venue:"Karmakar Hall", 
    },
    {
      id:2,
      name:"Extempore",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores provident voluptate, laudantium rem vel nemo ipsa reprehenderit itaque nisi accusantium, velit fugit architecto quis, sunt consequuntur molestias cum non modi?",
      noOfMember:1,
      venue:"Karmakar Hall", 
    },
    {
      id:3,
      name:"Creative Writing",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores provident voluptate, laudantium rem vel nemo ipsa reprehenderit itaque nisi accusantium, velit fugit architecto quis, sunt consequuntur molestias cum non modi?",
      noOfMember:1,
      venue:"Karmakar Hall", 
    },
    {
      id:4,
      name:"Hackthon",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores provident voluptate, laudantium rem vel nemo ipsa reprehenderit itaque nisi accusantium, velit fugit architecto quis, sunt consequuntur molestias cum non modi?",
      noOfMember:3,
      venue:"Karmakar Hall", 
    }
  ]
  return (
    <div>
      <div className='flex justify-start items-center space-x-10 p-10'>
        {
          events.map((item)=>{
            return <EventCard {...item} key={item.id}/>
          })    
        }
      </div>
      Event
    </div>

  )
}

export default Event
