import React from "react";
import Image from "next/image";
function EventList({ name, description, participants, venue,type }) {
  return (
    <div className="flex justify-between items-center m-6 p-6 bg-slate-200 rounded-md">
      <Image
        src="https://source.unsplash.com/random/1000x1000/?5"
        alt=""
        width={230}
        height={150}
        className="border-2 rounded-lg"
      />
      <div className="flex flex-col items-start text-gray-600 text-base lg:text-lg">
        <p className="text-2xl font-semibold">
          Event Name: <span className="text-blue-800">{name}</span>
        </p>
        <p className="">
          Description: <span className="text-gray-600">{description}</span>
        </p>
        <p className="">
          Venue: <span className="text-gray-600">{venue}</span>
        </p>
        <p className="">
          No of Participants:{" "}
          <span className="text-gray-600">{participants}</span>
        </p>
        <p className="">
          Type:{" "}
          <span className="text-gray-600">{type}</span>
        </p>
        <div className="h-20 w-40">
            Timmer
        </div>
      </div>
      <div className="flex flex-col items-center space-y-10">
        <button
          class="w-32 text-center align-middle select-none font-sans font-bold uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-lg py-3.5 px-7 rounded-lg bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex items-center gap-3"
          type="button"
        >
          Edit
        </button>
        <button
          class="w-32 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-lg py-3.5 px-7 rounded-lg bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex items-center gap-3"
          type="button"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default EventList;
