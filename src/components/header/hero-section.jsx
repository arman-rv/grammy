import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className=" flex"
      data-aos="fade-left"
      data-aos-offset="170"
      data-aos-duration="1500"
      data-aos-anchor="#example-anchor"
    >
      <div className="w-1/2 flex flex-col pr-32 pl-24 pt-14 gap-12">
        <h1 className="font-grammy red-text text-8xl font-semibold">Grammy</h1>
        <p className="text-stone-700 text-2xl font-semibold leading-8 dark:text-white pr-1">
          {" "}
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
          بهبود ابزارهای کاربردی می باشد. حال و آینده شناخت فراوان جامعه و
          متخصصان را می طلبد ...
        </p>
        <a className="shadow-text cursor-pointer font-bold pt-2 pb-4 w-3/6 text-2xl bg-secondary rounded-full text-center hover:scale-105 transition-all">
          مشاهده بیشتر
        </a>
      </div>
    </div>
  );
};

export { HeroSection };
