import Image from "next/image";
import About from "./about/page";
import Signup from "./signup/page";
import Login from "./login/page";
import Event from "./event/page";
import MiniDrawer from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <About />
      <Signup />
      <Login/>
      <Event/>
      <MiniDrawer/>
    </>
  );
}
