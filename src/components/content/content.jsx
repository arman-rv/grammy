import { Gallery } from "./gallery";

import cropHead from "../../assets/svg/cropHead.svg";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Content = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="gallery" className=" mt-56 px-10 flex flex-col gap-10">
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
        <div className=" text-[36px] leading-[45px] z-50 absolute right-0 wh-full w-1/6 text-left pt-8 pr-5 2xl:pr-10 pl-4 font-serif font">
          Welcome to the land of the most delightful tastes
        </div>
        <div className="0 h-full pb-[10px] px-3 pt-4 w-[80.05%]">
        <Gallery />
        </div>
      </div>
    </div>
  );
};

export { Content };
