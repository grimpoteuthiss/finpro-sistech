import Image from "next/image"

function HeroImage(){
    return(
        <Image
            src={"/Images/intro-blue.svg"}
            alt={"intro-image"}
            width={628}
            height={628}
            className="absolute z-10 right-36"
        />    
    )
}

export { HeroImage };