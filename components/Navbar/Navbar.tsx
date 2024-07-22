// components/Navbar.tsx
import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-200 fixed top-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a href="/" className="text-gray-900 font-bold text-2xl">
              LearningRoom
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <a
              href="/"
              className="text-gray-900 font-semibold hover:text-gray-700 py-2 px-4"
            >
              Home
            </a>
            <a
              href="/feedback"
              className="text-gray-900 font-semibold hover:text-gray-700 py-2 px-4"
            >
              Feedback
            </a>
            <a
              href="/courses"
              className="text-gray-900 font-semibold hover:text-gray-700 py-2 px-4"
            >
              Courses
            </a>
            <a
              href="/offers-today"
              className="text-gray-900 font-semibold hover:text-gray-700 py-2 px-4"
            >
              Offers Today
            </a>
          </div>

          {/* Search Bar */}
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Want to learn?"
              className="border border-gray-300 rounded-lg py-2 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
