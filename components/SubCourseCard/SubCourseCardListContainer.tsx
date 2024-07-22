import { SubCourseCardList } from "./SubCourseCardList";
import { SubCourseCardProps } from "./SubCourseCard";


function SubCourseCardListContainer({courses, activeCourseId, setActiveCourseId}:any) {
    const data2 = courses.map((course:any)=>({
        isComplete:course.isComplete,
        id:course.id,
        variant: course.id === activeCourseId ? "active" : "inactive",
        title:course.title,
        duration:course.duration,
        onClick: setActiveCourseId,
    }))
    return <SubCourseCardList cards={data2} activeCourseId={activeCourseId} setActiveCourseId={setActiveCourseId} />
}

export { SubCourseCardListContainer };