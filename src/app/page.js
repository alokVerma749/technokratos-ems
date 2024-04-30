"use client";

import Image from "next/image";
import About from "./about/page";
import Signup from "./signup/page";
import Login from "./login/page";
import Event from "./event/page";
import MiniDrawer from "@/components/Sidebar";
import { useState } from "react";
import { CarouselPlugin } from "@/components/ImageSlider";
import { Button } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { indigo } from "@mui/material/colors";

export default function Home() {
 const [isLogin, setIsLogin] = useState(true);
 return (
  <div className="flex justify-between gap-4 flex-col-reverse md:flex-row">
   <div className="flex flex-col md:w-1/2 mt-12 gap-5 p-3">
    <h2 className="font-extrabold text-6xl min-w-4/5">
     Welcome, To <span className="text-indigo-600">Technokratos&apos;24</span>{" "}
    </h2>
    <p className="text-gray-600 text-sm">
     your premier destination for organizing both formal and informal events
     with precision and flair. At TechnoKratos, we pride ourselves on seamlessly
     blending professionalism with creativity to curate unforgettable
     experiences. Whether you are planning a corporate gathering, a conference,
     or a casual social event, our dedicated team ensures every detail is
     meticulously managed, from conceptualization to execution. With our
     innovative approach and commitment to excellence, we transform your vision
     into reality, leaving a lasting impression on your guests. Choose
     TechnoKratos EMS for unparalleled event management expertise and let us
     turn your occasions into extraordinary moments
    </p>
    <Button
     variant="contained"
     color="inherit"
     size="medium"
     style={{ color: "white", background: "rgb(79,70,229)" }}
     className="md:w-2/5"
     startIcon={<EmojiEventsIcon />}
    >
     See Our Events
    </Button>
   </div>
   <CarouselPlugin className="max-w-1/2" />
  </div>
 );
}
