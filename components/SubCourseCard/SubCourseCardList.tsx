import  { SubCourseCard } from "./SubCourseCard";
import  { SubCourseCardProps } from "./SubCourseCard";

type SubCourseCardListProps = {
    cards: SubCourseCardProps[];
    activeCourseId: number;
     setActiveCourseId:any;
};

function SubCourseCardList({cards}: SubCourseCardListProps) {
    return (
        <div className="flex flex-col gap-3">
            {cards.map((card, index) => (
                <SubCourseCard key={index}  {...card} />
            ))}
        </div>
    );
}

export { SubCourseCardList };