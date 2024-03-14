import { Header } from "../components/header/header";
import { Content } from "../components/content/content";
import { Footer } from "../components/footer/footer";
import { ScrollToTop } from "../components/scrollToTop";
import { useRef } from "react";

const Landing = () => {
  const galleryAnchor = useRef(null);
  const aboutUsAnchor = useRef(null);
  const contactUsAnchor = useRef(null);

  const useAnchor = [galleryAnchor, aboutUsAnchor, contactUsAnchor];

  return (
    <div className="w-[clamp(100px,100%,1500px)] flex flex-col h-[1500px] overflow-hidden border relative">
      <Header useAnchor={useAnchor} />
      <Content useAnchor={useAnchor} />
      <Footer />

      <ScrollToTop />
    </div>
  );
};

export default Landing;
