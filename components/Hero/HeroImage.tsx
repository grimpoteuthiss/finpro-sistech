import Image from "next/image"

function HeroImage(){
    return(
        <Image
            src={"/Images/intro-blue.svg"}
            alt={"intro-image"}
            width={628}
            height={628}
            className="absolute z-10 2xl:right-36 right-0 top-28 xl:w-[628px] xl:h-[628px] lg:w-[436px] lg:h-[436px] lg:visible invisible"
        />    
    )
}

export { HeroImage };