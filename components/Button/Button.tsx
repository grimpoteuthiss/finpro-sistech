import { useRouter } from "next/router";
import Image from "next/image"

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    href?: string;
    imageUrl?: string;
    width?: number;
    height?: number;
};

function Button ({
    children,
    className,
    href,
    imageUrl,
    width = 42,
    height = 42,
}: ButtonProps) {
    const router = useRouter();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (href) {
            e.preventDefault();
            router.push(href);
        }
    };

    return (
        <button onClick={handleClick} className={`${className || ''}`}>
            {children}
            { imageUrl && <Image
                src={imageUrl}
                alt="button-arrow"
                width={width}
                height={height}
            /> }
        </button>
    )
}

export { Button };