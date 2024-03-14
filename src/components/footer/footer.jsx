import footer from "../../assets/svg/footer.svg";

import phone from "../../assets/icons/phone.png";
import marker from "../../assets/icons/marker.png";
import user from "../../assets/icons/user.png";
import clock from "../../assets/icons/clock.png";
import logo from "../../assets/images/logoSelf.png";

import { Map } from "./map";
import useThemeSwitcher from "../hooks/useThemeSwitcher";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [mode, setMode] = useThemeSwitcher();

  return (
    <div id="contactUs" className="w-full relative pt-32 mt-20">
      <div className="absolute -right-10 -bottom-16">
        <img src={footer} alt="Grammy" />
      </div>
      <div className="flex relative z-50 px-10 items-center pb-12 gap-10">
        <div
          className="h-[430px] w-2/5 flex flex-col gap-9 pr-7 pt-12"
          data-aos="fade-left"
          data-aos-offset="170"
          data-aos-duration="2000"
        >
          <div className="flex w-full items-center gap-4">
            <div className=" overflow-hidden w-14 rounded-full">
              <img src={phone} alt="phone" className="w-full scale-[1.3]" />
            </div>
            <p className="text-[28px]">
              <span className="font-bold">شماره تماس : </span> 01133700038
            </p>
          </div>
          <div className="flex w-full items-center gap-4">
            <div className=" overflow-hidden w-14 rounded-full">
              <img src={clock} alt="phone" className="w-full" />
            </div>
            <p className="text-[28px]">
              <span className="font-bold"> ساعت کاری : </span> 9 تا 12 شب
            </p>
          </div>
          <div className="flex w-full items-center gap-4">
            <div className=" overflow-hidden w-14 rounded-full">
              <img src={user} alt="phone" className="w-full scale-[1.3]" />
            </div>
            <p className="text-[28px]">
              <span className="font-bold"> مدیریت : </span> امیر علی ابراهیمی
            </p>
          </div>
          <div className="flex w-full items-center gap-4">
            <div className=" overflow-hidden w-14 rounded-full">
              <img src={marker} alt="phone" className="w-full scale-[1.3]" />
            </div>
            <p className="text-[28px] pt-1">
              <span className="font-bold"> آدرس : </span> میدان خزر،ابتدای
              سیدالشهدا
            </p>
          </div>
        </div>
        <div
          className="w-3/5 h-[430px] rounded-2xl overflow-hidden relative"
          data-aos="fade-up"
          data-aos-offset="170"
          data-aos-duration="2000"
        >
          <Map />
          <img
            src={logo}
            className="z-[400] absolute w-16 h-16 right-2 top-4"
          />
        </div>
      </div>
    </div>
  );
};

export { Footer };
