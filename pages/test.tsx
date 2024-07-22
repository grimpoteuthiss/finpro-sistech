import React, { useState } from 'react';
import { SideBar } from '../components/SideBar/SideBar';
import Image from 'next/image';

export default function Pages() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  return (
    <div className="flex flex-col h-screen bg-gray-130">
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

        <div className='pl-5'>
            {sidebarOpen && (
                <SideBar/>
            )}
        </div>

        <div className="flex-grow overflow-y-auto">
          <div className="px-4">
            <h2 className="text-2xl mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quas repudiandae natus adipisci sed cupiditate. <br></br> Doloremque distinctio temporibus quod eum sequi ducimus, voluptas id cum consequuntur aspernatur! Eos, harum inventore?</h2>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
