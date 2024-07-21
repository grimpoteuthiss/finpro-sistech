// components/SpecialOffers/CoursesList.tsx
import React from "react";

type Course = {
  id: number;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
};

const courses: Course[] = [
  {
    id: 1,
    title: "Course 1",
    description: "Description for Course 1",
    price: "$99",
    imageUrl: "/images/english-offer.jpg",
  },
  {
    id: 2,
    title: "Course 2",
    description: "Description for Course 2",
    price: "$149",
    imageUrl: "/images/history-offer.jpg",
  },
  {
    id: 3,
    title: "Course 3",
    description: "Description for Course 3",
    price: "$199",
    imageUrl: "/images/math-offer.webp",
  },
  {
    id: 4,
    title: "Course 4",
    description: "Description for Course 4",
    price: "$249",
    imageUrl: "/images/science-offer.webp",
  },
];

const CoursesList: React.FC = () => {
  return (
    <div className="p-6 bg-primary rounded-lg shadow-md mb-16">
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-bold flex-1">Let's Start Learning!</h2>
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
            <p className="mt-2 text-green-600 font-bold">{course.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { CoursesList };
