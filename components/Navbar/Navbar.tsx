// components/Navbar.tsx
import React from "react";
import { Logo } from "../Logo";

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-200 fixed top-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Logo imageUrl={"/images/logo.svg"} height={50} width={192}/>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <a
              href="#home"
              className="text-gray-230 font-semibold hover:text-primary py-2 px-4 transition-all duration-300 ease-in-out"
            >
              Home
            </a>
            <a
              href="#offers"
              className="text-gray-230 font-semibold hover:text-primary py-2 px-4 transition-all duration-300 ease-in-out"
            >
              Offers Today
            </a>
            <a
              href="#courses"
              className="text-gray-230 font-semibold hover:text-primary py-2 px-4 transition-all duration-300 ease-in-out"
            >
              Courses
            </a>
            <a
              href="#feedback"
              className="text-gray-230 font-semibold hover:text-primary py-2 px-4 transition-all duration-300 ease-in-out"
            >
              Feedback
            </a>
          </div>

          {/* Search Bar */}
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Want to learn?"
              className="border border-gray-300 rounded-lg py-2 px-4 text-gray-230 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            
          </div>
        </div>
      </div>
    </nav>
  );
};
