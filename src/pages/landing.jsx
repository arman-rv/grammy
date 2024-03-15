import { Header } from "../components/header/header";
import { Content } from "../components/content/content";
import { Footer } from "../components/footer/footer";
import { ScrollToTop } from "../components/scroll-to-top";

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
