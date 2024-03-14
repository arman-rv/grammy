import { Header } from "../components/header/header";
import { Content } from "../components/content/content";
import { ScrollToTop } from "../components/scrollToTop";
import { useRef } from "react";
import { Footer } from "../components/footer/footer";

const Landing = () => {
  return (
    <div className="w-[clamp(100px,100%,1500px)] flex flex-col overflow-hidden relative">
      <Header />
      <Content/>
      <Footer />

      <ScrollToTop />
    </div>
  );
};

export default Landing;
