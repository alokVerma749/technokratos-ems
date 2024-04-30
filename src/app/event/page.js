"use client";
import EventCard from "@/components/EventCard";
import { Description } from "@radix-ui/react-toast";
import React, { useEffect, useState } from "react";

const Event = () => {
  const [countParticipants, setCountParticipants] = useState(0);
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`/api/getevents?cache=${Date.now()}`);
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data.events);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
  
    fetchEvents();
  }, []);
  

  return (
    <div>
      <p className="flex w-full items-center justify-center font-bold text-indigo-600 border-b-2 pb-2 uppercase text-3xl">Our Events</p>
      <div className="flex flex-col md:flex-row flex-wrap justify-start items-center space-x-10 p-0 md:p-10">
        {events.map((item) => {
          return <EventCard {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Event;
