import { SubCourseCardListContainer } from "../SubCourseCard/SubCourseCardListContainer";

function SideBar({courses, activeCourseId, setActiveCourseId}:any) {

    return(
        <div className="w-[306px] p-6 bg-white h-screen rounded-t-3xl overflow-y-auto">
            <SubCourseCardListContainer courses={courses} activeCourseId={activeCourseId} setActiveCourseId={setActiveCourseId}/>
        </div>
    );
}
export { SideBar };