import { HeroSection } from "./hero-section";
import { Navbar } from "./navbar";

import hero from "../../assets/images/hero.png";
import head from "../../assets/svg/head.svg";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Header = ({useAnchor}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex justify-between gap-3 relative">
      <div className="relative z-50 w-full">
        <Navbar useAnchor={useAnchor} />
        <HeroSection />
      </div>
      <div className="absolute w-full top-0 right-0 flex justify-between">
        <img src={head} className="w-full " />
        <div
          className="absolute h-[600px] w-[600px] top-[86px] left-12 rounded-full overflow-hidden p-12 2xl:p-7"
          data-aos="fade-right"
          data-aos-offset="170"
          data-aos-duration="2000"
          data-aos-anchor="#example-anchor"
        >
          <img
            src={hero}
            className="w-full h-full scale-[1.01] rotate-animate"
          />
        </div>
      </div>
    </div>
  );
};

export { Header };
