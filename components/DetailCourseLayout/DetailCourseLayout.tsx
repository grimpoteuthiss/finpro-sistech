import { CourseNavBar } from "../CourseNavBar";
import { SideBar } from "../SideBar";
import { MainContent } from "../MainContent";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
type DetailCourseLayoutProps = {
    sidebarOpen: boolean;
    toggleSideBar: () => void;
    toggleCourse: (id: number) => void;
    courses: any;
}
function DetailCourseLayout({
    sidebarOpen,
    toggleSideBar,
    courses,
    toggleCourse,
    
}: DetailCourseLayoutProps) {
    const router = useRouter();
    const [activeCourseId, setActiveCourseId] = useState(courses[0].id || 0);
    const id  = router.query.id as string;
    console.log(router.query)

    useEffect(() => {
        if (id) {
          setActiveCourseId(parseInt(id, 10));
        }
      }, [id]);
    
      const handleCourseSelect = (id:any) => {
        setActiveCourseId(id);
        router.push(`/course/${id}`, undefined, { shallow: true });
      };
    

    return (
        <div className="flex flex-col h-screen bg-gray-130">
            <CourseNavBar toggleSideBar={toggleSideBar} />
            <div className="flex flex-grow overflow-hidden">
                <div className='pl-5'>
                    {sidebarOpen && <SideBar courses={courses} activeCourseId={activeCourseId} setActiveCourseId={handleCourseSelect}/>}
                </div>
                <div className="flex-grow overflow-y-auto">
                    <MainContent toggleCourse={toggleCourse} course={courses[activeCourseId]} videoUrl="https://youtu.be/YszONjKpgg4?si=oDFEZR7yEMS0KFKD" />
                </div>
            </div>
        </div>
    )
}

export { DetailCourseLayout };