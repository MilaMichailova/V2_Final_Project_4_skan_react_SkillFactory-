import { observer } from "mobx-react-lite";
import imgAddData from "../asets/images/get-data-people.svg";

import { useNavigate } from "react-router-dom";

const SearchNewsByCompanyCta = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="mainWrapper">
        <div className="leftPartRegister">
          <h1 className="primaryTitle secondaryTitle">
            сервис по поиску публикаций о компании по его ИНН
          </h1>
          <div className="subtitleMain">
            Комплексный анализ публикаций, получение данных в формате PDF на
            электронную почту.
          </div>
          <button
            onClick={() => navigate("/searc")}
            className=" secondsryButton"
          >
            Запросить данные
          </button>
        </div>
        <div className="rightPartRegister ">
          <img
            className="imgAddData"
            src={imgAddData}
            alt="det data people"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default observer(SearchNewsByCompanyCta);
