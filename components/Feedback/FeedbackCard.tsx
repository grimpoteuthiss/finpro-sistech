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
            <article className="rounded-3xl p-7 gap-3 flex flex-col shadow-xl">
                <div className="flex justify-between items-start">
                    <div className="flex flex-row gap-5 items-center">
                        <ProfileAvatar
                            imageUrl={imageUrl}
                            width={70}
                            height={70}
                            className="h-[70px] w-[70px]"
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
                    {desc}
                </div>
            </article>
        )
    }

export { FeedbackCard };
export type { FeedbackCardProps };