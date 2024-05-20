import Image from "next/image"
import React from "react"
import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { GiAlarmClock } from "react-icons/gi"
import { LuDollarSign } from "react-icons/lu"
import { MdDescription } from "react-icons/md"
import { SlCalender } from "react-icons/sl"
import Button from "../components/Button"


async function fetchEvent(eid) {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + `/api/event/${eid}`,
      {
        method: "GET",
        next: {
          revalidate: 0,
        },
      }
    )
    if (!response.ok) {
      throw new Error("Failed to fetch event")
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching events:", error)
  }
}

const EventPage = async ({ params }) => {
  const eid = params?.eid
  const event = (await fetchEvent(eid)) || []
  const { data } = event

  return (
    <div>
      <div className="mx-auto flex flex-col justify-center items-center w-full lg:w-[80%] shadow-xl p-2 brightness-100 hover:brightness-115 pb-10 bg-blue-50">
        <div className="relative w-full ">
          <Image
            src="https://source.unsplash.com/random/1000x1000/?5"
            alt=""
            width={230}
            height={150}
            className="border-2 rounded-lg w-full h-[70vh]"
          />
          <div className="absolute top-32 left-[20%] lg:text-5xl sm:text-4xl font-semibold text-white space-x-3 text-center leading-relaxed hover:scale-110 transition-all duration-500">
            <p>{data?.name}</p>
            <p>{data?.description.slice(0, 30) + '....'}</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center w-full">
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
            <div className="flex flex-row justify-center">
              <LuDollarSign className="text-2xl font-semibold mx-4" />
              <p className="text-xl text-fuchsia-600">{data.fee}</p>
            </div>
            <Button eid={eid} data={data} />
          </div>
        </div>
        <div>
          <p className="text-2xl font-semibold">Overview</p>
          <p className="text-gray-700 font-medium p-4">{data?.description}</p>
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
  )
}

export default EventPage
