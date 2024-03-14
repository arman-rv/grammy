import { Menu } from "../components/menu/menu";

const MenuPage = () => {
  return (
    <div className="w-full h-full bg-primary">
      <div className="w-[clamp(100px,100%,1500px)] mx-auto">
        <Menu />
      </div>
    </div>
  );
};

export default MenuPage;
