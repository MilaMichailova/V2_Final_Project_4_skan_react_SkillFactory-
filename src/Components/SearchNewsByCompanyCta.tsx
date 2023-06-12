import { observer } from "mobx-react-lite";
import imgAddData from "../asets/images/get-data-people.svg";

import { useNavigate } from "react-router-dom";
import { useStore } from "../Store";

const SearchNewsByCompanyCta = () => {
  const { userStore } = useStore();
  const navigate = useNavigate();
  return (
    <div className="mainWrapper">
      <div className="leftPartRegister">
        <h1 className="primaryTitle secondaryTitle">
          сервис по поиску публикаций о компании по его ИНН
        </h1>
        <div className="subtitleMain">
          Комплексный анализ публикаций, получение данных в формате PDF на
          электронную почту.
        </div>
        {userStore.isUserLoggedIn ? (
          <button
            onClick={() => navigate("/search")}
            className=" secondsryButton"
          >
            Запросить данные
          </button>
        ) : null}
      </div>
      <div className="rightPartRegister ">
        <img
          className="imgAddData"
          src={imgAddData}
          alt="det data people"
        ></img>
      </div>
    </div>
  );
};

export default observer(SearchNewsByCompanyCta);
