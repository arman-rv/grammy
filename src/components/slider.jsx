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

// import { useEffect } from "react";

const Slider = ({
  sliderItems,
  effect,
  centeredSlides,
  coverflowEffect,
  pagination,
  navigation,
  reverseDirection,
  slidesPerView,
  delay,
  spaceBetween,
  speed,
  className,
  smoothScroll,
}) => {
  // useEffect(() => {
  //   const element = document.querySelector(".swiper-wrapper");
  //   element.setAttribute("style", "transition-timing-function: Linear;");
  // }, []);
  
  return (
    <>
      <Swiper
        autoplay={{
          delay: delay,
          disableOnInteraction: false,
          reverseDirection: reverseDirection,
        }}
        grabCursor={true}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        loop={true}
        speed={speed}
        pagination={pagination}
        navigation={navigation}
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        className={className}
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
