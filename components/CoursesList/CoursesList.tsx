// components/SpecialOffers/CoursesList.tsx

import { useRouter } from "next/router";
import React from "react";

type Course = {
  id: number;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  category: string;
};

const courses: Course[] = [
  {
    id: 1,
    title: "English",
    description: "Learn grammar and vocabulary with our English courses",
    price: "Rp300.000",
    imageUrl: "/Images/english-offer.jpg",
    category: "SMA",
  },
  {
    id: 2,
    title: "History",
    description: "Broaden your knowledge with our History courses",
    price: "Rp350.000",
    imageUrl: "/Images/history-offer.jpg",
    category: "SMP",
  },
  {
    id: 3,
    title: "Math",
    description: "Improve your math skills with our Math courses",
    price: "Rp300.000",
    imageUrl: "/Images/math-offer.webp",
    category: "SMP",
  },
  {
    id: 4,
    title: "Science",
    description: "Amplify your knowledge with our Science courses",
    price: "Rp500.000",
    imageUrl: "/Images/science-offer.webp",
    category: "SD",
  },
];

const CoursesList: React.FC = () => {
  const router = useRouter();

  return (
    <div onClick={() => router.push("/course/1")} className="p-6 bg-primary rounded-lg shadow-md mb-16">
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-bold flex-1">Let&apos;s Start Learning!</h2>
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
            <p className="mt-2 text-green-600 font-bold">{course.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { CoursesList };
