import { Gallery } from "./gallery";
import logo from ".././../assets/images/logoSelf.png";
import cropHead from "../../assets/svg/cropHead.svg";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import gif1 from "../../assets/gif1.gif";
import gif2 from "../../assets/gif2.gif";

import double from "../../assets/svg/double.svg";
import { Slider } from "../slider";

const Content = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const scrollXItems = [
    "Grammy",
    "Grammy",
    "Grammy",
    "Grammy",
    "Grammy",
    "Grammy",
    "Grammy",
  ];

  return (
    <div id="gallery" className=" mt-24 px-10 flex flex-col gap-10 pt-32">
      <div
        className="relative overflow-hidden w-full select-none h-[310px] rounded-2xl"
        style={{ direction: "ltr" }}
        data-aos="fade-up"
        data-aos-offset="150"
        data-aos-duration="1500"
      >
        <div className="absolute z-40 scale-x-[-1] h-[270%] -top-48 -right-[903px] 2xl:-right-[887px]">
          <img src={cropHead} alt="Grammy" className="w-full h-full " />
        </div>
        <div className="font-grammy text-lg z-50 absolute right-0 wh-full w-1/6 text-center pt-8 flex flex-col justify-center items-center gap-4 pr-7">
          <img src={logo} className="w-28 h-28 brightness-0 invert-[100%]" />
          <span className="text-5xl pt-1">Grammy</span> land of the best tastes
        </div>
        <div className="0 h-full pb-[10px] px-3 pt-4 w-[80.05%]">
          <Gallery />
        </div>
      </div>

      <div className="flex w-full rounded-full overflow-hidden h-[310px] items-center mt-16">
        <div
          className="h-full w-1/3  relative z-50"
          data-aos="fade-left"
          data-aos-offset="60"
          data-aos-duration="1500"
        >
          <img src={gif1} className="w-full h-full object-cover " />
        </div>
        <div className="w-1/3 h-full flex flex-col px-8 pt-[14px] text-2xl font-semibold dark:text-[#ccc] text-primary gap-9">
          <p
            className="pl-16"
            data-aos="fade-left"
            data-aos-offset="47"
            data-aos-duration="1500"
          >
            کبابی گرمی با سالها تجربه بهترین طعم ها را خلق میکند...
          </p>

          <div
            className="font-grammy text-secondary-400 flex flex-col gap-3"
          >
            <Slider
              sliderItems={scrollXItems.map((item, index) => {
                return (
                  <div className="text-[29px]" key={index}>
                    {item}
                  </div>
                );
              })}
              slidesPerView={3}
              delay={0}
              spaceBetween={10}
              speed={1500}
              className="w-full"
            />
            <Slider
              sliderItems={scrollXItems.map((item, index) => {
                return (
                  <div className="text-[29px]" key={index}>
                    {item}
                  </div>
                );
              })}
              slidesPerView={3}
              delay={0}
              spaceBetween={10}
              speed={1500}
              reverseDirection={true}
              className="w-full"
            />
          </div>

          <p
            style={{ direction: "ltr" }}
            className="pr-10"
            data-aos="fade-right"
            data-aos-offset="24"
            data-aos-duration="1500"
          >
            Grammy kebab , enjoy the best persian food...{" "}
          </p> 
        </div>
        <div
          className="w-1/3 h-full relative z-50"
          data-aos="fade-right"
          data-aos-offset="250"
          data-aos-duration="1500"
        >
          <img src={gif2} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export { Content };