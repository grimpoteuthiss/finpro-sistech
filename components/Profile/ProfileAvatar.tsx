import Image from "next/image"

type ProfileAvatarProps = {
    imageUrl: string;
    width?: number;
    height?: number;
    className?: string;
};

function ProfileAvatar({
    imageUrl,
    width = 42,
    height = 42,
    className,
  }: ProfileAvatarProps) {
    return (
      <Image
        src={imageUrl}
        alt="Avatar picture"
        width={width}
        height={height}
        className={`rounded-full object-cover h-10 w-10 ${className || ''}`}
      />
    );
  }
export { ProfileAvatar };