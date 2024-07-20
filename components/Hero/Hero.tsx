import { Button } from "../Button";

type HeroProps = {
    buttonlabel?: string;
}

function Hero(){
    return(
        <header className="py-10">
            <div className="flex flex-col gap-8 page-center">
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
                        href="/bisa"
                        imageUrl="/images/material-symbols_arrow-forward-rounded.svg"
                        width={20}
                        height={20}
                        className="text-lg bg-primary rounded-full bg-primary flex flex-row items-center justify-center py-4 px-9 gap-[10px] text-center text-xl text-white"
                    >
                        Get Started
                    </Button>
                </div>
            </div>
        </header>
    );
}

export { Hero }