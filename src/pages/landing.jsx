import { Header } from "../components/header/header";
import { Content } from "../components/content/content";
import { Footer } from "../components/footer/footer";

const Landing = () => {
  return (
    <div className="w-[clamp(100px,100%,1500px)] flex flex-col h-[1500px] overflow-hidden">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Landing;
