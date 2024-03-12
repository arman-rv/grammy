import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  EffectCoverflow,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";

const Slider = ({
  sliderItems,
  effect,
  centeredSlides,
  coverflowEffect,
  pagination,
  navigation,
}) => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        slidesPerView={4}
        spaceBetween={29}
        loop={true}
        speed={1500}
        pagination={pagination}
        navigation={navigation}
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        className="mx-auto h-full w-full overflow-visible "
        effect={effect}
        centeredSlides={centeredSlides}
        coverflowEffect={coverflowEffect}
      >
        {sliderItems.map((item, index) => {
          return <SwiperSlide key={index}>{item}</SwiperSlide>;
        })}
      </Swiper>
    </>
  );
};

export { Slider };

// effect="coverflow"
// centeredSlides={true}
// coverflowEffect={{
//   rotate: 10,
//   stretch: 100,
//   depth: 100,
//   modifier: 1,
//   slideShadows: true,
// }}
