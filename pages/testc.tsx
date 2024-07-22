import React, { useState } from "react";
import { SideBar } from "../components/SideBar/SideBar";
import Image from "next/image";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function Pages() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  return (
    <div className="flex flex-col h-screen bg-gray-130">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <button onClick={toggleSidebar} className="">
            <Image
              src="/images/burger.svg"
              alt="burger"
              height={26}
              width={50}
            />
          </button>
          <Image
            src="/images/logo.svg"
            alt="ruang-guru-logo"
            height={50}
            width={180}
          />
        </div>
      </nav>

      <div className="flex flex-grow overflow-hidden">
        <div className="pl-5">{sidebarOpen && <SideBar />}</div>

        <div className="flex-grow overflow-y-auto">
          <div className="width-full relative">
            <ReactPlayer
              width={"100%"}
              height="100%"
              src={"https://www.youtube.com/watch?v=Feny5bs2JCg"}
            />
            <div className="flex flex-col absolute top-0 right-0 bottom-0 left-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
