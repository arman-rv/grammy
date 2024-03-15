import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import bg404 from "../assets/svg/404.svg";

const NotFound404 = () => {
  return (
    <div className="h-[1000px] bg-primary w-full flex justify-center text-[#eee]">
      <div className="w-[clamp(100px,100%,1500px)] h-full pt-[100px]">
        <div className="w-full h-full absolute top-0 left-0">
          <img src={bg404} className="w-full h-full" />
        </div>
        <div className="w-full h-full relative z-50 flex items-center flex-col gap-20">
          <h1 className="text-9xl font-grammy">404</h1>
          <p className="text-2xl"> صفحه مورد نظر یافت نشد !</p>
          <Link to="/" className="w-32 cursor-pointer">
            <img src={logo} className="w-full h-full" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound404;
