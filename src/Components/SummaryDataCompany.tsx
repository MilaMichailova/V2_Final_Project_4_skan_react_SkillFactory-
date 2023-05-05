import { observer } from "mobx-react-lite";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../asets/images/arrowNextSlider.svg";
import PrevArrow from "../asets/images/arrowPrewSlider.svg";
import verticalGrayLine from "../asets/images/verticalGrayLine.svg";

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

const SummaryDataCompany = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <div className="SummaryDataCompanyTitleWrapper">
        <h2 className="primaryTitle">Общая сводка</h2>
        <div className="subtitleLightGray">Найдено 4 221 вариантов</div>
      </div>
      <Slider {...settings} className="SliderSummaryDataCompany">
        <div className="sliderAkcentBlock sliderBlock">
          <div className="period ">Период</div>
          <div className="countData  ">Всего</div>
          <div className="riskData ">Риски</div>
        </div>
        <div className="sliderBlock">
          <div className=" periodCell">10.09.2021</div>
          <div className=" countDataCell ">5</div>
          <div className="riskDataCell">0</div>
        </div>
        <div className="sliderBlock">
          <div className=" periodCell">13.09.2021</div>
          <div className=" countDataCell ">2</div>
          <div className="riskDataCell">0</div>
        </div>
        <div className="sliderBlock">
          <div className=" periodCell">17.09.2021</div>
          <div className=" countDataCell ">6</div>
          <div className="riskDataCell">0</div>
        </div>
        <div className="sliderBlock">
          <div className=" periodCell">20.09.2021</div>
          <div className=" countDataCell ">8</div>
          <div className="riskDataCell">2</div>
        </div>
        <div className="sliderBlock">
          <div className=" periodCell">10.09.2021</div>
          <div className=" countDataCell ">5</div>
          <div className="riskDataCell">0</div>
        </div>
        <div className="sliderBlock">
          <div className=" periodCell">10.09.2021</div>
          <div className=" countDataCell ">5</div>
          <div className="riskDataCell">0</div>
        </div>
        <div className="sliderBlock">
          <div className=" periodCell">10.09.2021</div>
          <div className=" countDataCell ">5</div>
          <div className="riskDataCell">0</div>
        </div>
        <div className="sliderBlock">
          <div className=" periodCell">10.09.2021</div>
          <div className=" countDataCell ">5</div>
          <div className="riskDataCell">0</div>
        </div>
        <div className="sliderBlock">
          <div className=" periodCell">test</div>
          <div className=" countDataCell ">1test</div>
          <div className="riskDataCell">1test</div>
        </div>
      </Slider>
    </div>
  );
};

export default observer(SummaryDataCompany);
