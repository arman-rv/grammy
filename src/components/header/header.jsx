import { HeroSection } from "./hero-section";
import { Navbar } from "./navbar";

const Header = () => {
  return (
    <div className="flex justify-between gap-3">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export { Header };
