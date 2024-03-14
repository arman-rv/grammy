import { Gallery } from "./gallery";

import cropHead from "../../assets/svg/cropHead.svg";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Content = ({ useAnchor }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [galleryAnchor, aboutUsAnchor, contactUsAnchor] = useAnchor

  return (
    <div ref={galleryAnchor} className=" mt-24 px-10 flex flex-col gap-10 pt-32">
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
        <div className="font-grammy text-[38px] leading-[46px] z-50 absolute right-0 wh-full w-1/6 text-left pt-9 pr-4 2xl:pr-10 pl-5">
          Welcome to the land of the best tastes
        </div>
        <div className="0 h-full pb-[10px] px-3 pt-4 w-[80.05%]">
          <Gallery />
        </div>
      </div>
    </div>
  );
};

export { Content };
