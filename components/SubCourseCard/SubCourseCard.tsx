import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/router";

type SubCourseCardProps = {
    id:number;
    isComplete: boolean;
    title: string;
    duration: number;
    variant: "active" | "inactive",
    onClick:any;
}

function SubCourseCard({
    id,
    isComplete = false,
    title,
    duration,
    variant,
    onClick,
}: SubCourseCardProps) {
    const router = useRouter();
    return(
        <Link href={`/vid/${id}`}>
        <article onClick={()=>{}} className={`cursor-pointer rounded-3xl w-[254px] flex flex-row justify-between px-4 py-3.5
            ${variant === "active"
                ? "bg-gray-230 text-white"
                : "bg-gray-900"
            }
        `}>
            <div className="flex flex-row gap-2">
                <Image
                    src={`${variant === "active" ? "/images/play-white.svg" : "/images/play-black.svg"}`}
                    alt={"play"}
                    width={24}
                    height={24}
                />
                <div>
                    <p className="font-bold">{title}</p>
                    <p className="text-xs">{duration} min</p>
                </div>
            </div>
            <Image
                src={"/images/tick.svg"}
                alt={"complete"}
                width={24}
                height={24}
                className={`${isComplete === true ? "visible" : "hidden"}`}
            />
        </article>
        </Link>
    )
}

export { SubCourseCard };
export type { SubCourseCardProps };