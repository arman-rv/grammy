import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";

import { SunIcon } from "./icon";
import { MoonIcon } from "./icon";

import useThemeSwitcher from "../hooks/useThemeSwitcher";

import { cn } from "../../../libs/utils";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const menuClass = "cursor-pointer hover:scale-[1.1] transition pb-1";

  const [mode, setMode] = useThemeSwitcher();

  return (
    <div
      className="flex justify-between text-[26px] font-bold items-center px-10"
      data-aos="fade-down"
      data-aos-offset="170"
      data-aos-duration="1200"
      data-aos-anchor="#example-anchor"
    >
      <div className="h-[88px] pt-2">
        <img
          src={logo}
          alt="logo"
          className="h-full w-full cursor-pointer rounded-full"
        />
      </div>
      <div className="flex gap-8 shadow-text pr-1 -mt-2">
        <Link to="/menu" className={cn(menuClass, "red-text")}>
          منو
        </Link>
        <span className={cn(menuClass, "red-text")}>|</span>
        <a href="/#gallery" className={cn(menuClass, "red-text")}>
          گالری
        </a>
        <span>|</span>
        <Link className={menuClass}>درباره ما</Link>
        <span>|</span>
        <Link className={menuClass}>ارتباط با ما</Link>
      </div>
      <button
        className="h-10 w-10  -mt-3 rounded-full"
        onClick={() => setMode(mode == "dark" ? "light" : "dark")}
      >
        {mode == "dark" ? <MoonIcon /> : <SunIcon />}
      </button>
    </div>
  );
};

export { Navbar };
