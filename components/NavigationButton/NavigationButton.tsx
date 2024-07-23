import Image from "next/image";

type NavigationButtonProps = {
  variant: "prev" | "next";
  className?: string;
  href?: string;
  imageUrl?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
};

function NavigationButton({
  className,
  variant,
  imageUrl,
  onClick,
  width = 24,
  height = 24,
}: NavigationButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`p-2.5 rounded-xl ${
        className || ""
      }
            ${variant === "prev" ? "bg-white" : "bg-primary"}

        `}
    >
      <Image
        src={
          variant === "prev"
            ? "/Images/caret-left.svg"
            : "/Images/caret-right.svg"
        }
        alt="button-arrow"
        width={width}
        height={height}
      />
    </button>
  );
}

import { useSwiper } from "swiper/react";

function ButtonGroup({
    className
}: any) {
  const swiper = useSwiper();

  return (<div className={`${className || 'flex gap-4 justify-end'}`}>
    <NavigationButton
      onClick={() => {
        swiper.slidePrev();
      }}
      variant={"prev"}
      className="hover:shadow-[inset_0_0_0_2px] hover:shadow-primary shadow-[0px_0px_28px_-14px] shadow-tertiary transition-all duration-300 ease-in-out"
    />
    <NavigationButton
      onClick={() => {
        swiper.slideNext();
      }}
      variant={"next"}
      className="hover:bg-gray-230 shadow-[0px_0px_28px_-14px] shadow-tertiary transition-all duration-300 ease-in-out"
    />
  </div>)
}

export { NavigationButton, ButtonGroup };
