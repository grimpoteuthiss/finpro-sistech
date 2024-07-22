import { Logo } from "../Logo";
import { SubCourseButton } from "../SubCourseButton";

type CourseNavBarLeftProps = {
    toggleSideBar: () => void
}

function CourseNavBarLeft({
    toggleSideBar,
}: CourseNavBarLeftProps) {
    return(
    <div className="flex items-center gap-3">
        <SubCourseButton 
          onClick={toggleSideBar}
          imageUrl="/images/burger.svg"
          alt="burger"
          height={26}
          width={50}
        />
        <Logo
          imageUrl="/images/logo.svg"
          height={50}
          width={180}
        />
      </div>
    );
}

export { CourseNavBarLeft };