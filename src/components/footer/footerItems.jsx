import { Link } from "react-router-dom";
import { cn } from "../../../libs/utils";

const Items = ({ image, title, desc, name, className, link, href }) => {
  return (
    <div className="flex w-full items-center gap-5">
      <div className=" overflow-hidden w-[52px] rounded-full">
        <img
          src={image}
          alt={name}
          className={cn("w-full select-none", className)}
        />
      </div>
      <div>
        <span className="font-bold text-md select-none">{title}</span>
        <p className="text-lg m-0 p-0">
          {link ? <Link target="blank" className="underline cursor-pointer" to={href}>{desc}</Link> :  desc }
        </p>
      </div>
    </div>
  );
};

export { Items };
