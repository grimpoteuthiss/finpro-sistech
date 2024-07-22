// import { DetailCourseLayout } from "../components/DetailCourseLayout/DetailCourseLayout";
// import { useState } from "react"

// const data = [
//     {
//         "isComplete": true,
//         "variant": "inactive",

//         "id":0,
//         "title": "Introduction",
//         "duration": 4,
//         "videoUrl": "https://youtu.be/YszONjKpgg4?si=oDFEZR7yEMS0KFKD",
//         "timeStamps": [
//             "00:00 - Introduction",
//             "01:22 - Transition Property",
//             "06:20 - Animation Property",
//         ]
//     },
//     {
//         "isComplete": false,
//         "variant": "active",
//         "id":1,
//         "title": "CSS Animation",
//         "duration": 15,
//         "videoUrl": "https://youtu.be/TUD1AWZVgQ8?si=sFvYQ_Uac9dLCXQn",
//         "timeStamps": [
//             "00:00 - Introduction",
//             "00:39 - Viewport Meta Tag",
//             "02:06 - Media Query Orientation",
//             "03:15 - Media Query Aspect Ratios",
//             "04:00 - Media Query Ranges",
//             "05:25 - Container Queries",
//             "09:27 - Custom Media Queries",
//             "11:09 - Different HTML",
//             "12:20 - CSS Grid",
//             "16:15 - Clamp",
//             "18:00 - Viewport Units",
//         ],
//     },
//     {
//         "isComplete": false,
//         "variant": "inactive",
//         "id":2,
//         "title": "Responsive Navbar Tutorial",
//         "duration": 13,
//         "videoUrl": "https://youtu.be/At4B7A4GOPg?si=DLr6bHFWWZm06Q5l",
//         "timeStamps": [
//             "00:00 - Introduction",
//             "00:13 - HTML",
//             "01:36 - CSS",
//             "02:34 - Styling",
//             "11:41 - JavaScript",
//             "13:17 - Outro"

//         ]
//     },
//     {
//         "isComplete": false,
//         "variant": "inactive",
//         "id":3,
//         "title": "Simple CSS Trick",
//         "duration": 5,
//         "videoUrl": "https://youtu.be/jhl5afLEKdo?si=jhMF1C2qrvPbMPZn",
//         "timeStamps": [
//             "00:00 - Introduction to CSS basics",
//             "1:30 - Styling text and fonts with CSS",
//             "2:45 - Creating responsive layouts",
//         ],
//     },
//     {
//         "isComplete": false,
//         "variant": "inactive",
//         "id":4,
//         "title": "CSS Anchor",
//         "duration": 5,
//         "videoUrl": "https://youtu.be/jhl5afLEKdo?si=jhMF1C2qrvPbMPZn",
//         "timeStamps": [
//             "00:00 - Introduction to CSS basics",
//             "1:30 - Styling text and fonts with CSS",
//             "2:45 - Creating responsive layouts",
//         ],
//     },
//     {
//         "isComplete": false,
//         "variant": "inactive",
//         "id":6,
//         "title": "CSS Selector",
//         "duration": 5,
//         "videoUrl": "https://youtu.be/jhl5afLEKdo?si=jhMF1C2qrvPbMPZn",
//         "timeStamps": [
//             "00:00 - Introduction to CSS basics",
//             "1:30 - Styling text and fonts with CSS",
//             "2:45 - Creating responsive layouts",
//         ],
//     },
// ]

// export default function Pages() {
//     const [sidebarOpen, setSidebarOpen] = useState(true);
//     const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  
//     return(
//         <DetailCourseLayout
//             sidebarOpen={sidebarOpen}
//             toggleSideBar={toggleSidebar}
//             courses={data}
//         />
//     );
//   }