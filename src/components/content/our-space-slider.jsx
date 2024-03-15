import { Slider } from "../slider";

import space1 from "../../assets/our-space/space1.jpg";
import space2 from "../../assets/our-space/space2.jpg";
import space3 from "../../assets/our-space/space3.jpg";
import space4 from "../../assets/our-space/space4.jpg";
import space5 from "../../assets/our-space/space5.jpg";
import space6 from "../../assets/our-space/space6.jpg";
import space7 from "../../assets/our-space/space7.jpg";
import space8 from "../../assets/our-space/space8.jpg";

const OurSpaceSlider = () => {
  const itemsImage = [
    space1,
    space2,
    space3,
    space4,
    space5,
    space6,
    space7,
    space8,
  ];

  const sliderItems = itemsImage.map((item, index) => {
    return (
      <div key={index} className="w-full h-full rounded-2xl overflow-hidden border">
        <img src={item} alt={index} className="w-full h-full object-cover" />
      </div>
    );
  });

  return (
    <div className="w-full h-full">
      <Slider
        sliderItems={sliderItems}
        slidesPerView={2.233}
        delay={1500}
        spaceBetween={0}
        speed={2000}
        className="mx-auto h-full w-full overflow-visible"
        effect="coverflow"
        centeredSlides={true}
        coverflowEffect={{
          rotate: 10,
          stretch: 50,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        reverseDirection={true}
      />
    </div>
  );
};

export { OurSpaceSlider };
