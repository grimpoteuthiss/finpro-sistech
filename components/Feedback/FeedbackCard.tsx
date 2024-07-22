import Image from "next/image"
import { ProfileAvatar } from "../Profile/ProfileAvatar";


type FeedbackCardProps = {
    imageUrl: string;
    name: string;
    job: string;
    desc: string;
}

function FeedbackCard({
    imageUrl,
    name,
    job,
    desc
    }: FeedbackCardProps) {
        return (
            <article className="rounded-3xl p-7 gap-3 flex flex-col shadow-[0px_0px_50px_-10px_] shadow-gray-400">
                <div className="flex justify-between items-start">
                    <div className="flex flex-row gap-5 items-center">
                        <ProfileAvatar
                            imageUrl={imageUrl}
                            width={70}
                            height={70}
                            className="xl:h-[70px] xl:w-[70px] h-[60px] w-[60px]"
                        />
                        <div>
                            <h3 className="font-bold">{name}</h3>
                            <p>{job}</p>
                        </div>
                    </div>
                    <Image
                        width={25}
                        height={21}
                        alt="decorative-image"
                        src="/images/quote.svg"
                    />
                </div>
                <div>
                    <p>
                        {desc}
                    </p>
                </div>
            </article>
        )
    }

export { FeedbackCard };
export type { FeedbackCardProps };