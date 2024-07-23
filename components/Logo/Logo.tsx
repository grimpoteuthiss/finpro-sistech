import Image from "next/image";
import { useRouter } from "next/router";


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
  const router = useRouter();
    return(
        <Image
            onClick={() => router.push("/")}
            src={imageUrl}
            alt="logo"
            height={height}
            width={width}
            className="hover:cursor-pointer"
        />
    )
}

export { Logo };