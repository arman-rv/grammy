import { useEffect, useState } from "react";
import upIcon from "../assets/images/upIcon.png";
import { MoonIcon, SunIcon } from "./header/icon";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import {cn} from "../../libs/utils"

const ScrollToTop = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [show, setShow] = useState();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 250) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={cn("fixed transition-all w-16 h-32 duration-300 bottom-12 ease-out" ,show ? "left-10 visible opacity-100" : "left-0 invisible opacity-0")}>
      <button
        className="h-1/2 w-full rounded-full p-3 bg-secondary mb-3"
        onClick={() => setMode(mode == "dark" ? "light" : "dark")}
      >
        {mode == "dark" ? <MoonIcon /> : <SunIcon />}
      </button>
      <a
        onClick={() => window.scrollTo({behavior:"smooth" , top:0} )}
        className="cursor-pointer flex items-center justify-center rounded-full bg-secondary w-full h-1/2 p-3"
      >                                                                        
        <img
          src={upIcon}
          alt="Grammy"
          className="invert-[100%] w-full h-full"
        />
      </a>
    </div>
  );
};

export { ScrollToTop };
