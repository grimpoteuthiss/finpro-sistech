// components/SpecialOffers/SpecialOffers.tsx
import React from "react";

type Course = {
  id: number;
  title: string;
  description: string;
  originalPrice: string;
  discountedPrice: string;
  imageUrl: string;
};

const courses: Course[] = [
  {
    id: 1,
    title: "Course 1",
    description: "Description for Course 1",
    originalPrice: "$99",
    discountedPrice: "$49.50",
    imageUrl: "/images/english-offer.jpg",
  },
  {
    id: 2,
    title: "Course 2",
    description: "Description for Course 2",
    originalPrice: "$149",
    discountedPrice: "$74.50",
    imageUrl: "/images/history-offer.jpg",
  },
  {
    id: 3,
    title: "Course 3",
    description: "Description for Course 3",
    originalPrice: "$199",
    discountedPrice: "$99.50",
    imageUrl: "/images/math-offer.webp",
  },
  {
    id: 4,
    title: "Course 4",
    description: "Description for Course 4",
    originalPrice: "$249",
    discountedPrice: "$124.50",
    imageUrl: "/images/science-offer.webp",
  },
];

// Dummy Countdown Timer Component
const DummyCountdown: React.FC = () => {
  return <div className="text-sm font-bold">10d 5h 30m 15s</div>;
};

const SpecialOffers: React.FC = () => {
  return (
    <div className="p-6 bg-primary rounded-lg shadow-md mb-16" id="offers">
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-bold flex-1">Special Offers</h2>
        <DummyCountdown />
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
            <h3 className="text-lg font-semibold">{course.title}</h3>
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
