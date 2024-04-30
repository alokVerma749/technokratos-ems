'use client'

import Image from "next/image";
import About from "./about/page";
import Signup from "./signup/page";
import Login from "./login/page";
import Event from "./event/page";
import MiniDrawer from "@/components/Sidebar";
import { useState } from "react";

export default function Home() {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <>
      {isLogin ? <MiniDrawer /> : <Login />}
    </>
  );
}
