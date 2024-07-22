// components/SpecialOffers.tsx
import React from "react";
import { Countdown } from "./Countdown";

type Course = {
  id: number;
  title: string;
  description: string;
  originalPrice: string;
  discountedPrice: string;
  imageUrl: string;
  category: string;
};

const courses: Course[] = [
  {
    id: 1,
    title: "English",
    description: "Learn grammar and vocabulary with our English courses",
    originalPrice: "Rp150.000",
    discountedPrice: "Rp75.000",
    imageUrl: "/images/english-offer.jpg",
    category: "SMA",
  },
  {
    id: 2,
    title: "History",
    description: "Broaden your knowledge with our History courses",
    originalPrice: "Rp200.000",
    discountedPrice: "Rp100.000",
    imageUrl: "/images/history-offer.jpg",
    category: "SMP",
  },
  {
    id: 3,
    title: "Math",
    description: "Improve your math skills with our Math courses",
    originalPrice: "Rp150.000",
    discountedPrice: "Rp75.000",
    imageUrl: "/images/math-offer.webp",
    category: "SD",
  },
  {
    id: 4,
    title: "Science",
    description: "Amplify your knowledge with our Science courses",
    originalPrice: "Rp150.000",
    discountedPrice: "Rp75.000",
    imageUrl: "/images/science-offer.webp",
    category: "SMA",
  },
];

const SpecialOffers: React.FC = () => {
  return (
    <div className="p-6 bg-black rounded-lg shadow-md mb-16">
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-bold flex-1 text-white">Special Offers</h2>
        <Countdown />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white p-4 rounded-lg shadow-lg border border-gray-200"
          >
            <img
              src={course.imageUrl}
              alt={course.title}
              className="w-full h-32 object-cover rounded-md mb-4"
            />
            <div className="flex items-center mb-2">
              <h3 className="text-lg font-semibold">{course.title}</h3>
              <span className="ml-2 px-2 py-1 bg-gray-200 text-gray-700 text-sm rounded">
                {course.category}
              </span>
            </div>
            <p className="text-gray-600 mb-2">{course.description}</p>
            <div className="mt-2">
              <p className="text-red-600 line-through mb-1">
                {course.originalPrice}
              </p>
              <p className="text-green-600 font-bold">
                {course.discountedPrice}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { SpecialOffers };
