import { Button } from "../Button";

type HeroProps = {
    buttonlabel?: string;
}

function Hero(){
    return(
        <header className="pb-40 pt-32" id="home">
            <div className="flex flex-col xl:gap-8 gap-5 page-center
                text-center items-center lg:items-start lg:text-start">
                <div className="flex flex-col">
                    <h1>Your One Stop</h1>
                    <h1>
                        <span>to </span>
                        <span className="text-primary">Advance</span>
                        <span>,</span>
                    </h1>
                    <h1>Your Skill</h1>
                </div>
                <div className="text-gray-500">
                    <h4>Technology and the world of work change fast — with us, you are faster.</h4>
                    <h4>Get the skills to achieve goals and stay competitive.</h4>
                </div>
                <div className="">
                    <Button
                        href="/course/0"
                        imageUrl="/Images/material-symbols_arrow-forward-rounded.svg"
                        width={20}
                        height={20}
                        className="bg-primary rounded-full bg-primary flex flex-row items-center justify-center py-4 px-9 gap-[10px] text-center text-white
                        xl:text-xl lg:text-lg text-sm hover:shadow-[inset_0_0_0_2px] hover:shadow-primary hover:bg-white hover:text-primary transition-all duration-300 ease-in-out hover:font-bold
                        "
                    >
                        Get Started
                    </Button>
                </div>
            </div>
        </header>
    );
}

export { Hero }