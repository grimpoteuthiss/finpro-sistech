import { FeedbackCard } from "./FeedbackCard";
import { FeedbackCardProps } from "./FeedbackCard";
import { Swiper, SwiperSlide } from 'swiper/react';


type FeedbackCardListProps = {
    cards : FeedbackCardProps[];
}

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

function FeedbackCardList({
    cards
}: FeedbackCardListProps) {
    return (
        <Swiper
            height={400}
            loop={true}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            mousewheel={true}
            keyboard={true}
            breakpoints={{
                992: {
                slidesPerView: 2,
                spaceBetween: 38,
                },
            }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="p-8"
        >
            {cards.map((card, index) => (
                <SwiperSlide key={index}>
                    <FeedbackCard {...card} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export { FeedbackCardList };
