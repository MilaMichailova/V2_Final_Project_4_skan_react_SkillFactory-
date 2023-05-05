import { observer } from "mobx-react-lite";
// import sliderMosk from "../asets/images/why-we.svg";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HighSpeedSlide from "../asets/images/High-and-prompt-processing-speed.svg";
import HugeDatabaseSlide from "../asets/images/Huge-complex-database.svg";
import ProtectionInfoSlide from "../asets/images/Protection-of-confidential-information.svg";
import NextArrow from "../asets/images/arrowNextSlider.svg";
import PrevArrow from "../asets/images/arrowPrewSlider.svg";
import WhyWe from "../asets/images/why-we.svg";

const SampleNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, width: "39px", height: "39px" }}
      onClick={onClick}
    >
      <img className="NextArrow" src={NextArrow} alt="NextArrow" />
    </div>
  );
};

const SamplePrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, width: "39px", height: "39px" }}
      onClick={onClick}
    >
      <img className="PrevArrow" src={PrevArrow} alt="PrevArrow" />
    </div>
  );
};

const AboutUs = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <h1 className="primaryTitle aboutUsTitle">Почему именно мы</h1>
      <Slider {...settings} className="SliderAboutUs">
        <div>
          <img src={HighSpeedSlide} alt="High Speed Slide" />
        </div>
        <div>
          <img src={HugeDatabaseSlide} alt="HugeDatabaseSlide" />
        </div>
        <div>
          <img src={ProtectionInfoSlide} alt="ProtectionInfoSlide" />
        </div>
        <div>
          <img src={ProtectionInfoSlide} alt="High Speed Slide 2" />
        </div>
      </Slider>
      <img className="WhyWeImg" src={WhyWe} alt="WhyWe" />
    </div>
  );
};

export default observer(AboutUs);
