import { CourseNavBarLeft } from './CourseNavBarLeft';
import Image from 'next/image';

type CourseNavBarProps = {
  toggleSideBar: () => void;
}

function CourseNavBar({
  toggleSideBar,
}: CourseNavBarProps){
  return (
    <nav className="flex items-center justify-between p-4">
      <CourseNavBarLeft toggleSideBar={toggleSideBar} />
    </nav>
  );
}

export { CourseNavBar };