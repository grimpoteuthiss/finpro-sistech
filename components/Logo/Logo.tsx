import Image from "next/image";

type LogoProps = {
    imageUrl: string,
    height: number,
    width: number,
}

function Logo({
    imageUrl,
    height=180,
    width=50,
}: LogoProps) {
    return(
        <Image
            src={imageUrl}
            alt="logo"
            height={height}
            width={width}
        />
    )
}

export { Logo };