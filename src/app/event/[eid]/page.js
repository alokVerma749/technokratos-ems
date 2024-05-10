import Image from "next/image";
import React from "react";
import { SlCalender } from "react-icons/sl";
import { GiAlarmClock } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { LuDollarSign } from "react-icons/lu";
import { MdDescription } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
async function fetchEvent(eid) {
  try {
    console.log(eid, "&&&&&&&&&");
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + `/api/event/${eid}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch event");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching events:", error);
  }
}

const EventPage = async ({ params }) => {
  const eid = params?.eid;
  const event = (await fetchEvent(eid)) || [];
  const { data } = event;
  console.log("Data", data);
  // use this event to render data
  return (
    <div>
      <div className="mx-auto flex flex-col justify-center items-center w-full lg:w-[80%] shadow-xl p-2 brightness-100 hover:brightness-115 pb-10">
        <div className="relative w-full ">
          <Image
            src="https://source.unsplash.com/random/1000x1000/?5"
            alt=""
            width={230}
            height={150}
            className="border-2 rounded-lg w-full h-[70vh]"
          />
          <div className="absolute top-32 left-[20%] lg:text-5xl sm:text-4xl font-semibold text-white space-x-3 text-center leading-relaxed hover:scale-110 transition-all duration-500">
            <p>San Diego Magazine 2017</p>
            <p>Best Of San Diego Party</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-around items-center w-full">
          <div className="mt-6">
            <div className="flex justify-center gap-x-3 m-2">
              <SlCalender className="text-2xl font-semibold" />
              <span className="text-xl text-fuchsia-600">{data.timing}</span>
            </div>
            <div className="flex justify-center gap-x-3 m-2">
              <GiAlarmClock className="text-2xl font-semibold" />
              <span className="text-xl text-fuchsia-600">{data.timing}</span>
            </div>
            <div className="flex justify-center gap-x-3 m-2">
              <FaLocationDot className="text-2xl font-semibold" />
              <span className="text-xl text-fuchsia-600">{data.venue}</span>
            </div>
            <div className="flex justify-center gap-x-3 m-2">
              <MdDescription className="text-2xl font-semibold" />
              <span className="text-xl text-fuchsia-600">
                {data.description}
              </span>
            </div>
          </div>
          <div>
            <div className="flex flex-row lg:flex-col">
              <LuDollarSign className="text-2xl font-semibold mx-4" />
              <p className="text-xl text-fuchsia-600">{data.fee}</p>
            </div>
            <button
              type="button"
              class="py-2 px-5 me-2 mt-4 mb-2 text-lg border-black font-medium text-gray-900 focus:outline-none bg-white rounded-lg border hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 hover:scale-105 transition-all"
            >
              Register
            </button>
          </div>
        </div>
        <div>
          <p className="text-2xl font-semibold">Overview</p>
          <p className="text-gray-700 font-medium p-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            asperiores corrupti provident optio nisi corporis porro doloribus
            explicabo. Cupiditate repudiandae doloremque praesentium unde natus
            nesciunt cum laborum quia quibusdam maxime distinctio, tempora
            sapiente hic perspiciatis, molestiae itaque minima fugit error
            numquam repellendus possimus, quae necessitatibus at rem! Autem
            quasi assumenda reiciendis molestiae doloribus ratione nihil
            repellendus aut voluptatibus. Minima ut dolore sit ab rem? Eveniet
            velit a voluptatibus sapiente. Id nulla expedita numquam magni
            consectetur rem delectus praesentium rerum veniam mollitia fugiat
            aspernatur porro ullam autem voluptatibus minus nisi repudiandae,
            ipsa cumque sequi et quasi accusantium? Amet quae est assumenda.
          </p>
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-900">
            Share With friends
          </p>
          <div className="flex space-x-10">
            <FaInstagram className="text-4xl text-fuchsia-500" />
            <FaTwitter className="text-4xl text-fuchsia-500" />
            <FaWhatsapp className="text-4xl text-fuchsia-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
