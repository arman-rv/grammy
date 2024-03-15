import { Slider } from "../slider";
import { Items } from "./gallery-items";

import image2 from "../../assets/images/2.jpg";
import image4 from "../../assets/images/4.jpg";
import image5 from "../../assets/images/5.jpg";
import image6 from "../../assets/images/6.jpg";
import image7 from "../../assets/images/7.jpg";
import image8 from "../../assets/images/8.jpg";
import image9 from "../../assets/images/9.jpg";
import image10 from "../../assets/images/10.jpg";
import image11 from "../../assets/images/11.jpg";
import image12 from "../../assets/images/12.jpg";
import image13 from "../../assets/images/13.jpg";

const Gallery = () => {
  const sliderItems = [
    image2,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
  ];
  return (
    <Slider
      sliderItems={sliderItems.map((image, index) => {
        return <Items image={image} key={index} />;
      })}
      slidesPerView={4}
      delay={1500}
      spaceBetween={29}
      speed={2000}
      className="mx-auto h-full w-full overflow-visible"
    />
  );
};

export { Gallery };
