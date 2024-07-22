import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import { Button } from "../Button/Button";
import { list } from "postcss";

type MainContentProps = {
  videoUrl: string;
  course: any;
  toggleCourse: (id:number) => void;
}

function MainContent({
  videoUrl,
  course,
  toggleCourse
}: MainContentProps) {
  return (
    <div className="px-10 flex flex-col gap-8">
      <div className="relative w-full player-wrapper ">
        <ReactPlayer
          controls={true}
          width="100%"
          height="100%"
          url={course.videoUrl}
          className="react-player absolute top-0 left-0"
        />
      </div>
      <div className="flex justify-end gap-6">
        <Button
          imageUrl="/images/volume.svg"
          width={24}
          height={24}
          className="bg-[#34374a] rounded-full  flex flex-row items-center justify-center py-4 px-5 gap-[10px] text-center text-white
                        xl:text-xl lg:text-lg text-sm
                        "
        >
          <h4>
            Audio Learning
          </h4>
        </Button>
        <Button
        onClick={()=>toggleCourse(course.id)}
          className="bg-[#34374a] rounded-full  flex flex-row items-center justify-center py-4 px-5 gap-[10px] text-center text-white
                        xl:text-xl lg:text-lg text-sm
                        "
        >
          <h4>
            Complete
          </h4>
        </Button>
        <Button
          className="bg-[#34374a] rounded-full  flex flex-row items-center justify-center py-4 px-5 gap-[10px] text-center text-white
                        xl:text-xl lg:text-lg text-sm
                        "
          href="/quiz"
        >
          <h4>
            Do Quiz
          </h4>
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        <h6 className="font-bold">Timeline Video</h6>
        {course.timeStamps.map((timestamp:string) =>(
          <div key={timestamp} className="border-2 px-[13px] py-[17px] rounded-md">
          {timestamp}
         </div>

        ))}
      </div>
    </div>
  );
}

export { MainContent };
