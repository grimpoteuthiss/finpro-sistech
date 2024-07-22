import Image from "next/image";

type SubCourseButtonProps = {
    onClick: () => void;
    imageUrl: string;
    alt: string;
    height: number;
    width: number;
}

function SubCourseButton({
    onClick,
    imageUrl,
    alt,
    height,
    width,
}: SubCourseButtonProps) {
    return (
        <button onClick={onClick} className="">
            <Image src={imageUrl} alt={alt} height={height} width={width}/>
        </button>
    );
}

export { SubCourseButton };