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
      className={`shadow-[0px_0px_28px_-14px] shadow-tertiary p-2.5 rounded-xl ${
        className || ""
      }
            ${variant === "prev" ? "bg-white" : "bg-primary"}

        `}
    >
      <Image
        src={
          variant === "prev"
            ? "/images/caret-left.svg"
            : "/images/caret-right.svg"
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
    />
    <NavigationButton
      onClick={() => {
        swiper.slideNext();
      }}
      variant={"next"}
    />
  </div>)
}

export { NavigationButton, ButtonGroup };
