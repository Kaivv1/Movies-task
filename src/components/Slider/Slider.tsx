import Carousel from "react-bootstrap/Carousel";
import { sliderImages } from "../../assets/slider/export";
import "./_slider.scss";
import { useState } from "react";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  return (
    <section className="custom-slider">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={4000}
        touch
      >
        {sliderImages.map(({ img }, i) => (
          <Carousel.Item key={i}>
            <img src={img} alt="" />
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default Slider;
