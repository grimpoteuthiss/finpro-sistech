import { useRouter } from "next/router";
import Image from "next/image"

type ButtonProps = {
    children?: React.ReactNode;
    className?: string;
    href?: string;
    imageUrl?: string;
    width?: number;
    height?: number;
    onClick?: () => void
};

function Button ({
    children,
    className,
    href,
    imageUrl,
    width = 42,
    height = 42,
    onClick,
}: ButtonProps) {
    const router = useRouter();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (href) {
            e.preventDefault();
            router.push(href);
        }
    };

    return (
        <button onClick={onClick ? onClick : handleClick} className={`${className || ''}`}>
            { children }
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