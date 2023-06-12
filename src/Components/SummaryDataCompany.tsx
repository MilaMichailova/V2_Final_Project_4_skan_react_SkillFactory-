import { observer } from "mobx-react-lite";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../asets/images/arrowNextSlider.svg";
import PrevArrow from "../asets/images/arrowPrewSlider.svg";
import verticalGrayLine from "../asets/images/verticalGrayLine.svg";
import { useStore } from "../Store";
import moment from "moment";

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
  const { searchStore } = useStore();

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          arrows: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };

  return (
    <div>
      <div className="SummaryDataCompanyTitleWrapper">
        <h2 className="primaryTitle">Общая сводка</h2>
        <div className="subtitleLightGray">
          Найдено {searchStore.totalDocumentsCount} вариантов
        </div>
      </div>
      <Slider {...settings} className="desktop SliderSummaryDataCompany ">
        {searchStore.isHistogramsLoading ? (
          <div className="loader"></div>
        ) : null}
        <div className="sliderAkcentBlock sliderBlock">
          <div className="period ">Период</div>
          <div className="countData ">Всего</div>
          <div className="riskData ">Риски</div>
        </div>

        {searchStore.totalDocumentsHistogramData.map((document) => (
          <div className="sliderBlock">
            <div className=" periodCell">
              {moment(document.date).format("DD.MM.YYYY")}
            </div>
            <div className=" countDataCell ">{document.value}</div>
            <div className="riskDataCell">
              {
                searchStore.riskFactorsHistogramData.find(
                  (x) => x.date === document.date
                ).value
              }
            </div>
          </div>
        ))}
      </Slider>

      <Slider {...settings} className="mobile SliderSummaryDataCompany ">
        {searchStore.totalDocumentsHistogramData.map((document) => (
          <div className="sliderItem">
            <div className="column">
              <div className="header">Период</div>
              <div className="value">
                {moment(document.date).format("DD.MM.YYYY")}
              </div>
            </div>
            <div className="column">
              <div className="header">Всего</div>
              <div className="value">{document.value}</div>
            </div>
            <div className="column">
              <div className="header">Риски</div>
              <div className="value">
                {
                  searchStore.riskFactorsHistogramData.find(
                    (x) => x.date === document.date
                  ).value
                }
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default observer(SummaryDataCompany);
