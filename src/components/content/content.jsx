import { Gallery } from "./gallery";
import logo from ".././../assets/images/logoSelf.png";
import cropHead from "../../assets/svg/cropHead.svg";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import gif1 from "../../assets/gif1.gif";
import gif2 from "../../assets/gif2.gif";
import spaceBg from "../../assets/svg/spaceBg.svg";
import mainLogo from "../../assets/images/logo.png";

import { Slider } from "../slider";

import space1 from "../../assets/our-space/space1.jpg";
import space7 from "../../assets/our-space/space7.jpg";
import space8 from "../../assets/our-space/space8.jpg";

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
      {/* gallery */}
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

      {/* gif element */}
      <div id="aboutUs"></div>
      <div className="flex w-full rounded-full overflow-hidden h-[310px] items-center mt-24">
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

          <div className="font-grammy text-secondary-400 flex flex-col gap-3">
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

      {/* our space */}
      <div className="flex h-[700px] mt-20  select-none">
        <div className="w-3/5 flex flex-col gap-6 p-7">
          <div
            className="flex h-1/2 gap-6 w-full"
            data-aos="fade-left"
            data-aos-offset="130"
            data-aos-duration="1500"
          >
            <div className="w-1/2 h-full">
              <img
                src={space1}
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
            <div className="w-1/2 h-full">
              <img
                src={space8}
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
          </div>
          <img
            src={space7}
            className="h-1/2 object-cover rounded-2xl w-full"
            data-aos="fade-up"
            data-aos-offset="130"
            data-aos-duration="1500"
          />
        </div>

        <div
          className="w-2/5 pt-7 relative"
          data-aos="fade-right"
          data-aos-offset="150"
          data-aos-duration="1500"
        >
          <div className="w-full h-full absolute bottom-0 left-0 pt-7">
            <div className="w-full overflow-hidden h-full scale-x-[-1] relative rounded-2xl">
              <img
                src={spaceBg}
                className="w-full scale-[2.3] absolute top-44 right-0"
              />
              <img
                src={mainLogo}
                className="scale-x-[-1] w-36 absolute bottom-[245px] right-[95px] 2xl:bottom-[233px] 2xl:right-[103px]"
              />
            </div>
          </div>

          <div className="w-3/5 2xl:pr-4 text-center pl-20">
            <h2 className="dark:text-[#eee] text-secondary-400 drop-shadow-[1px_1px_0_#c10006] dark:drop-shadow-[0.5px_0.5px_0_#ccc] dark:shadow-none text-[89px] leading-[1] font-emza ">
              Grammy
            </h2>
            <p className="text-xl text-primary dark:text-white pt-14  font-bold dark:font-normal">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و تکنولوژی مورد نیاز
            </p>
            <p
              className="pt-24 text-xl text-primary dark:text-white font-bold dark:font-normal"
              data-aos="fade-up"
              data-aos-offset="130"
              data-aos-duration="1500"
            >
              Lorem Ipsum Generator Generate Lorem Ipsum placeholder text.
              Select the number of characters, words, sentences or paragraphs,
              and hit generate!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Content };
