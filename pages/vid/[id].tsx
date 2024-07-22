import { DetailCourseLayout } from "../../components/DetailCourseLayout/DetailCourseLayout";
import { useState, useEffect } from "react"

export async function getStaticProps() {
    const res = await fetch("https://grimpoteuthiss.github.io/subcourses.json");
    const data = await res.json();
    return {
        props: {
            initialData: data,
        },
        revalidate: 60*60,
    };
}


export async function getStaticPaths() {
    const res = await fetch("https://grimpoteuthiss.github.io/subcourses.json");
    const data = await res.json();
    
    // Assuming each course has an 'id' field
    const paths = data.map((course:any) => ({
      params: { id: course.id.toString() },
    }));
  
    return { paths, fallback: false };
  }
  

export default function Pages({initialData}:any) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [courses, setCourses] = useState(initialData);
    const [localChanges, setLocalChanges] = useState<{[key: number]: boolean}>({});
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    useEffect(() => {
      const cachedData = localStorage.getItem('cachedCourseData');
      if (cachedData) {
        const parsedData: any = JSON.parse(cachedData);
        setLocalChanges(parsedData.reduce((acc: {[key: number]: boolean}, course: any) => {
          acc[course.id] = course.isComplete;
          return acc;
        }, {}));
      }
    }, []);
  
    useEffect(() => {
      setCourses((prevCourses: any) =>
        initialData.map((course: any) => ({
          ...course,
          isComplete: localChanges[course.id] !== undefined ? localChanges[course.id] : course.isComplete
        }))
      );
    }, [initialData, localChanges]);
  
    const updateCourseStatus = (courseId: number) => {
      setLocalChanges(prev => {
        const newChanges = { ...prev, [courseId]: !prev[courseId] };
        localStorage.setItem('cachedCourseData', JSON.stringify(
          courses.map((course: any) => course.id === courseId ? { ...course, isComplete: newChanges[courseId] } : course)
        ));
        return newChanges;
      });
    };
  
  
    return(
        <DetailCourseLayout
            sidebarOpen={sidebarOpen}
            toggleSideBar={toggleSidebar}
            courses={courses}
            toggleCourse={updateCourseStatus}
        />
    );
  }