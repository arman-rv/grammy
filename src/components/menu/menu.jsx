import { useState } from "react";
import menu from "../../assets/images/menu.jpg";
import menuSec from "../../assets/images/menu-sec.png";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(true);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <div className="w-full" onDoubleClick={() => handleMenu()}>
        <img src={showMenu ? menu : menuSec} alt="menu" className="w-full" />
      </div>
    </div>
  );
};

export { Menu };
