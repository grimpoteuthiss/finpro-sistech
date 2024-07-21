import { FeedbackCard } from "./FeedbackCard";
import { FeedbackCardProps } from "./FeedbackCard";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { ButtonGroup } from "../NavigationButton/NavigationButton";

type FeedbackCardListProps = {
  cards: FeedbackCardProps[];
};

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { NavigationButton } from "../NavigationButton/NavigationButton";

function FeedbackCardList({ cards }: FeedbackCardListProps) {
  return (
    <Swiper
      height={400}
      loop={true}
      slidesPerView={1}
      spaceBetween={10}
      pagination={{

        el: ".swiper-pagination",
        clickable: true,
      }}
      // navigation={true}
      mousewheel={true}
      keyboard={true}
      breakpoints={{
        992: {
          slidesPerView: 2,
          spaceBetween: 38,
        },
      }}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="flex flex-col gap-10"

    >
      <div>
        {cards.map((card, index) => (
          <SwiperSlide key={index}  >
            <FeedbackCard {...card} />
          </SwiperSlide>
        ))}
      </div>
        <div className="grid grid-cols-3 py-4">
            <div className="w-10"></div>
            <div className="swiper-pagination"></div>
            <ButtonGroup/>
        </div>
      
    </Swiper>
  );
}

export { FeedbackCardList };


