"use client"
import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { CardActionArea, CardActions } from "@mui/material"
import PersonIcon from "@mui/icons-material/Person"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import Link from "next/link"

function EventCard({ _id, name, description, participants, venue, type }) {
  return (
    <Card className="shadow-xl rounded w-full sm:w-[70%] sm:mx-auto md: md:w-[330px] lg:w-[360px] my-6 p-2 hover:shadow-2xl border-2 border-gray-500">
      <CardActionArea className="">
        <CardMedia
          component="img"
          image="https://source.unsplash.com/random/100x100/?5"
          alt="green iguana"
          className="h-[240px] rounded"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="font-semibold"
          >
            {name}
          </Typography>
          <p>
            <span className="text-md font-semibold ">Event Type: </span>
            <span className="text-gray-400 font-semibold read-only ">
              {type}
            </span>
          </p>
          <Typography variant="body2" color="text.secondary" className="">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <div className="flex items-center justify-between w-full p-2">
        <div className="flex gap-1">
          <PersonIcon />
          {participants?.length}
        </div>
        <div className="flex gap-1">
          <LocationOnIcon />
          {venue}
        </div>
      </div>
      <CardActions>
        <Link href={`/event/${_id}`} className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-indigo-100 rounded hover:bg-white group py-1.5 px-2.5">
          <span className="w-56 h-48 rounded bg-indigo-600 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-indigo-600 transition-colors duration-300 ease-in-out group-hover:text-white">
            Subscribe
          </span>
        </Link>
      </CardActions>
    </Card>
  )
}

export default EventCard
