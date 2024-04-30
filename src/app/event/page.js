"use client";
import EventCard from "@/components/EventCard";
import { Description } from "@radix-ui/react-toast";
import React, { useState } from "react";

const Event = () => {
  const [countParticipants, setCountParticipants] = useState(0);
  const events = [
    {
      id: 1,
      name: "Debate",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores provident voluptate, laudantium rem vel nemo ipsa reprehenderit itaque nisi accusantium, velit fugit architecto quis, sunt consequuntur molestias cum non modi?",
      noOfMember: 1,
      venue: "Karmakar Hall",
      type:"Formal"
    },
    {
      id: 2,
      name: "Extempore",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores provident voluptate, laudantium rem vel nemo ipsa reprehenderit itaque nisi accusantium, velit fugit architecto quis, sunt consequuntur molestias cum non modi?",
      noOfMember: 1,
      venue: "Karmakar Hall",
      type:"Formal"
    },
    {
      id: 3,
      name: "Creative Writing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores provident voluptate, laudantium rem vel nemo ipsa reprehenderit itaque nisi accusantium, velit fugit architecto quis, sunt consequuntur molestias cum non modi?",
      noOfMember: 1,
      venue: "Karmakar Hall",
      type:"Formal"
    },
    {
      id: 4,
      name: "Hackthon",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores provident voluptate, laudantium rem vel nemo ipsa reprehenderit itaque nisi accusantium, velit fugit architecto quis, sunt consequuntur molestias cum non modi?",
      noOfMember: 3,
      venue: "Karmakar Hall",
      type:"Formal"
    },
    {
      id: 5,
      name: "Singing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores provident voluptate, laudantium rem vel nemo ipsa reprehenderit itaque nisi accusantium, velit fugit architecto quis, sunt consequuntur molestias cum non modi?",
      noOfMember: "Solo/Group",
      venue: "MPH",
      type:"Informal"
    },
    {
      id: 6,
      name: "Dancing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores provident voluptate, laudantium rem vel nemo ipsa reprehenderit itaque nisi accusantium, velit fugit architecto quis, sunt consequuntur molestias cum non modi?",
      noOfMember: "Solo/Group",
      venue: "MPH",
      type:"Informal"
    },
    {
      id: 7,
      name: "Drama",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores provident voluptate, laudantium rem vel nemo ipsa reprehenderit itaque nisi accusantium, velit fugit architecto quis, sunt consequuntur molestias cum non modi?",
      noOfMember: "Group",
      venue: "MPH",
      type:"Informal"
    },
    {
      id: 8,
      name: "Instumental",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores provident voluptate, laudantium rem vel nemo ipsa reprehenderit itaque nisi accusantium, velit fugit architecto quis, sunt consequuntur molestias cum non modi?",
      noOfMember: "Solo/Group",
      venue: "MPH",
      type:"Informal"
    },
    {
      id: 9,
      name: "Fashion Show",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores provident voluptate, laudantium rem vel nemo ipsa reprehenderit itaque nisi accusantium, velit fugit architecto quis, sunt consequuntur molestias cum non modi?",
      noOfMember: "Solo",
      venue: "MPH",
      type:"Informal"
    },
    {
      id: 10,
      name: "Musical Chair",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores provident voluptate, laudantium rem vel nemo ipsa reprehenderit itaque nisi accusantium, velit fugit architecto quis, sunt consequuntur molestias cum non modi?",
      noOfMember: "Solo",
      venue: "MPH",
      type:"Informal"
    },
    {
      id: 11,
      name: "Tambola",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores provident voluptate, laudantium rem vel nemo ipsa reprehenderit itaque nisi accusantium, velit fugit architecto quis, sunt consequuntur molestias cum non modi?",
      noOfMember: "Solo",
      venue: "MPH",
      type:"Informal"
    },
    {
      id: 12,
      name: "Paper Dance",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores provident voluptate, laudantium rem vel nemo ipsa reprehenderit itaque nisi accusantium, velit fugit architecto quis, sunt consequuntur molestias cum non modi?",
      noOfMember: 2,
      venue: "MPH",
      type:"Informal"
    },
  ];

  return (
    <div>
      <p>Formal Events</p>
      <div className="flex flex-wrap justify-start items-center space-x-10 p-10">
        {events.map((item) => {
          return <EventCard {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Event;
