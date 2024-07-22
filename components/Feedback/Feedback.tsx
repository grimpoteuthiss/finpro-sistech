import { FeedbackCardListContainer } from "./FeedbackCardListContainer";

function Feedback() {
    return (
        <section className="py-10" id="feedback">
            <div className="flex flex-col page-center">
                <div className="flex flex-col xl:gap-4 gap-2 px-8">
                    <h2 className="font-semibold">
                        <span>Student </span>
                        <span className="text-primary leading-7">Feedback</span>
                    </h2>
                    <h4>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </h4>
                </div>
                <div>
                    <FeedbackCardListContainer/>
                </div>
            </div>
        </section>
    )
}

export { Feedback };