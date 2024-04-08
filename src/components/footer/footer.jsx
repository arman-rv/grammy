import footer from "../../assets/svg/footer.svg";

import phone from "../../assets/icons/phone.png";
import marker from "../../assets/icons/marker.png";
import user from "../../assets/icons/user.png";
import clock from "../../assets/icons/clock.png";
import instagramLogo from "../../assets/icons/instagramLogo.png";
import email from "../../assets/icons/email.png";
import logo from "../../assets/images/logo-self.png";

import { Map } from "./map";
import useThemeSwitcher from "../hooks/useThemeSwitcher";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Items } from "./footer-items";

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
          className="h-[430px] w-2/5 flex flex-col gap-8 pr-5 pt-6"
          data-aos="fade-left"
          data-aos-offset="170"
          data-aos-duration="1500"
        >
          <div className="flex gap-5">
            <Items
              name="phone"
              image={phone}
              title="شماره تماس : "
              desc="01133700038"
              link={true}
              href="tel:01133700038"
            />
            <Items
              name="phone"
              image={user}
              title="مدیریت : "
              desc="امیر علی ابراهیمی"
            />
          </div>

          <div className="flex gap-5">
            {" "}
            <Items
              name="phone"
              image={clock}
              title="ساعت کاری : "
              desc="9 صبح تا 12 شب"
            />
            <Items
              name="phone"
              image={marker}
              title="آدرس : "
              desc="ابتدای سیدالشهدا"
              link={true}
              href="https://maps.app.goo.gl/dN4cfS7gg9hsru2dA"
            />
          </div>
          <div className="flex gap-5">
            <Items
              name="phone"
              image={instagramLogo}
              title="اینستاگرام : "
              desc="grammy.kebab"
              className="invert-[100%] scale-150 p-2"
              link={true}
              href="https://www.instagram.com/grammy.kebab/"
            />

            <Items
              name="phone"
              image={email}
              title="ایمیل : "
              desc="grammy@gmail"
              className="invert-[100%] scale-125"
              link={true}
              href="mailto:grammy.kebab@gmail.com"
            />
          </div>

          <div className="flex flex-col justify-between text-center pl-14 gap-5 select-none">
            <h3 className="text-[80px] leading-[75px] mt-1 font-emza">
              Grammy{" "}
            </h3>
            <p className="text-xl pt-2 ">
              build with
              <span className="text-2xl"> &hearts; </span>
              by
              <Link className="underline pl-2" to="tel:09117828923">
                arman rezvani
              </Link>
            </p>
          </div>
        </div>

        <div
          className="w-3/5 h-[400px] rounded-2xl overflow-hidden relative mt-4"
          data-aos="fade-right"
          data-aos-offset="170"
          data-aos-duration="1500"
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
