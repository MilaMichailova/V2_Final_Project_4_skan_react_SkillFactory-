import { observer } from "mobx-react-lite";
import ImgFined from "../asets/images/fined.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const SearchNewsByCompanyForm = () => {
  let date = null;

  const setNewDate = (newDate: any) => {
    date = new Date(newDate);
  };

  const navigate = useNavigate();

  let search = () => {
    navigate("/searchResult");
  };

  return (
    <div>
      <section>
        <div className=" SearchNewsByCompany mainWrapper">
          <div className="leftPartSearch">
            <div className="SearchTextWrapper">
              <div className="primaryTitle ">
                Найдите необходимые данные в пару кликов.
              </div>
              <div className="subtitleMain">
                Задайте параметры поиска.<br></br>
                Чем больше заполните, тем точнее поиск
              </div>
            </div>

            <div className="formSearcWrapper">
              <div className="formSearcLeft">
                <label className=" formInputLableSearc formLable">
                  {" "}
                  ИНН компании
                </label>
                <input
                  className="forminput forminputSearc"
                  name="inn"
                  id="inn"
                  type="text"
                  placeholder="10 цифр"
                ></input>
                <label className="formLable formInputLableSearc">
                  Тональность{" "}
                </label>
                <select className="selectTonal" id="selectTonal">
                  <option>Любая</option>
                  <option>Негативная</option>
                  <option>Позитивная</option>
                </select>
                <label className="formLable formInputLableSearc">
                  {" "}
                  Количество документов в выдаче*
                </label>
                <input
                  className="forminput forminputSearc"
                  name="documentsCount"
                  id="documentsCount"
                  type="number"
                  placeholder="От 1 до 1000"
                ></input>
                <div className="formLable formInputLableSearc">
                  Диапазон поиска*
                </div>
                <div className="DatePickerWrapper">
                  <DatePicker
                    placeholderText="Дата начала"
                    className="DatePicker"
                    dateFormat="dd/MM/yyyy"
                    selected={date}
                    onChange={(date) => setNewDate(date)}
                  />
                  <DatePicker
                    className="DatePicker"
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Дата конца"
                    selected={date}
                    onChange={(date) => setNewDate(date)}
                  />
                </div>
              </div>

              <div className="formSearcRight">
                <div className="checkSearcWrapper">
                  <label className="labelCheckSerch">
                    <input type="checkbox" className="checkbox"></input>
                    <span className="fake"></span>
                    <span className="checkTitle">
                      Признак максимальной полноты
                    </span>
                  </label>
                </div>
                <div className="checkSearcWrapper">
                  <label className="labelCheckSerch">
                    <input type="checkbox" className="checkbox"></input>
                    <span className="fake"></span>
                    <span className="checkTitle">
                      Упоминания в бизнес-контексте
                    </span>
                  </label>
                </div>
                <div className="checkSearcWrapper">
                  <label className="labelCheckSerch">
                    <input type="checkbox" className="checkbox"></input>
                    <span className="fake"></span>
                    <span className="checkTitle">
                      Главная роль в публикации
                    </span>
                  </label>
                </div>
                <div className="checkSearcWrapper">
                  <label className="labelCheckSerch">
                    <input type="checkbox" className="checkbox"></input>
                    <span className="fake"></span>
                    <span className="checkTitle">
                      Публикации только с риск-факторами
                    </span>
                  </label>
                </div>
                <div className="checkSearcWrapper">
                  <label className="labelCheckSerch">
                    <input type="checkbox" className="checkbox"></input>
                    <span className="fake"></span>
                    <span className="checkTitle">
                      Включать технические новости рынков
                    </span>
                  </label>
                </div>
                <div className="checkSearcWrapper">
                  <label className="labelCheckSerch">
                    <input type="checkbox" className="checkbox"></input>
                    <span className="fake"></span>
                    <span className="checkTitle">
                      Включать анонсы и календари
                    </span>
                  </label>
                </div>
                <div className="checkSearcWrapper">
                  <label className="labelCheckSerch">
                    <input type="checkbox" className="checkbox"></input>
                    <span className="fake"></span>
                    <span className="checkTitle">Включать сводки новостей</span>
                  </label>
                </div>
                <div className="buttonSearcWrapper">
                  <button
                    onClick={search}
                    className="secondsryButton FothButton"
                  >
                    Поиск
                  </button>
                  <span className="footnoteSearc">
                    * Обязательные к заполнению поля
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="rightPartSearchNewsByCompany">
            <img
              className="imgFined"
              src={ImgFined}
              alt=" fined info company"
            ></img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default observer(SearchNewsByCompanyForm);
