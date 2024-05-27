
import HeroSection1 from "@/components/herosec1"
import MiniDrawer from "@/components/Sidebar"
import Image from "next/image"

export default function Home() {
  return (
    <section className="relative bg-red-400 text-white">
      <MiniDrawer />
      <div className="flex flex-col md:flex-row text-gray-50 relative md:ml-40">
        <div className="relative z-10">
          <div className="font-extrabold text-4xl md:text-5xl lg:text-6xl mt-0 md:mt-10 md:ml-20 text-center md:text-left">
            <h2 className="">2024</h2>
            <h1 className="text-4xl md:text-6xl lg:text-8xl my-4 md:my-10">Technocratos</h1>
            <div className="flex flex-row text-xl md:text-3xl lg:text-4xl xl:text-5xl mt-4 md:mt-10 md:space-x-10 font-semibold justify-center md:justify-start">
              <h2>Dance</h2>
              <h2>|</h2>
              <h2>DJ</h2>
              <h2>|</h2>
              <h2>Events</h2>
              <h2>|</h2>
              <h2>Friends</h2>
            </div>
            <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl mt-8 lg:mt-12 font-semibold text-center md:text-left">Drive into the thrill</h2>
          </div>
        </div>
      </div>
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-500 to-transparent opacity-75"></div>
            <Image src={'/assets/Events.jpg'} height={1800} width={1200} alt={"Image"} className="w-full h-[100vh] object-cover " />
          </div>
        </div>
      <HeroSection1 />
    </section>
  )
}
