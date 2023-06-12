import { observer, useLocalObservable } from "mobx-react-lite";
import ImgFined from "../asets/images/fined.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { useStore } from "../Store";
import moment from "moment";

const SearchNewsByCompanyForm = () => {
  const navigate = useNavigate();
  const { searchStore, userStore } = useStore();

  if (!userStore.isUserLoggedIn) {
    navigate("/login");
  }

  const searchForm: any = useLocalObservable(() => ({
    startDate: new Date(),
    endDate: new Date(),
    companyInn: "",
    numberOfDocuments: 0,
    tonality: "any",
    maxFullness: false,
    inBusinessNews: null,
    onlyMainRole: false,
    onlyWithRiskFactors: false,
    excludeTechNews: true,
    excludeAnnouncements: true,
    excludeDigests: true,
    setStringValue(key: keyof typeof searchForm, value: string) {
      searchForm[key] = value.trim();
    },
    setDate(key: "startDate" | "endDate", value: string) {
      searchForm[key] = value;
      if (this.startDate.getTime() > this.endDate.getTime()) {
        this.endDate = this.startDate;
      }
    },
    setCheckBoxValue(key: keyof typeof searchForm, checked: boolean) {
      searchForm[key] = checked;
    },
    get isDateValid() {
      const isDateRangeValid =
        this.startDate.getTime() < this.endDate.getTime();
      return !!this.startDate || !!this.endDate || isDateRangeValid;
    },
    get isInnValid() {
      return !!this.companyInn && isInnValid(this.companyInn);
    },
    get isValidDocumentsCount() {
      return this.numberOfDocuments > 0;
    },
    get hasError() {
      return (
        !this.isDateValid || !this.isInnValid || !this.isValidDocumentsCount
      );
    },
  }));

  let search = () => {
    searchStore.search(searchForm);
    navigate("/searchResult");
  };

  const isInnValid = (string: any): boolean => {
    // Замена пробелов
    const inn = string.replace(/\s/g, "");

    // Длина инн
    if (!/^([0-9]{10}|[0-9]{12})$/.test(inn)) {
      console.log(1);

      return false;
    }

    // Контрольные цифры
    if (inn.length === 10) {
      let checkSum;

      checkSum =
        ((2 * inn[0] +
          4 * inn[1] +
          10 * inn[2] +
          3 * inn[3] +
          5 * inn[4] +
          9 * inn[5] +
          4 * inn[6] +
          6 * inn[7] +
          8 * inn[8]) %
          11) %
        10;

      if (checkSum === Number(inn[9])) {
        return true;
      } else {
        return false;
      }
    } else if (inn.length === 12) {
      let checkSumOne, checkSumTwo;

      checkSumOne =
        ((7 * inn[0] +
          2 * inn[1] +
          4 * inn[2] +
          10 * inn[3] +
          3 * inn[4] +
          5 * inn[5] +
          9 * inn[6] +
          4 * inn[7] +
          6 * inn[8] +
          8 * inn[9]) %
          11) %
        10;

      checkSumTwo =
        ((3 * inn[0] +
          7 * inn[1] +
          2 * inn[2] +
          4 * inn[3] +
          10 * inn[4] +
          3 * inn[5] +
          5 * inn[6] +
          9 * inn[7] +
          4 * inn[8] +
          6 * inn[9] +
          8 * inn[10]) %
          11) %
        10;

      if (checkSumOne === Number(inn[10]) && checkSumTwo === Number(inn[11])) {
        return true;
      } else if (checkSumOne !== Number(inn[10])) {
        return false;
      } else if (checkSumTwo !== Number(inn[11])) {
        return false;
      }
    }
    if (inn.length === 10) {
      let checkSum;

      checkSum =
        ((2 * inn[0] +
          4 * inn[1] +
          10 * inn[2] +
          3 * inn[3] +
          5 * inn[4] +
          9 * inn[5] +
          4 * inn[6] +
          6 * inn[7] +
          8 * inn[8]) %
          11) %
        10;

      if (checkSum === Number(inn[9])) {
        return true;
      } else {
        return false;
      }
    } else if (inn.length === 12) {
      let checkSumOne, checkSumTwo;

      checkSumOne =
        ((7 * inn[0] +
          2 * inn[1] +
          4 * inn[2] +
          10 * inn[3] +
          3 * inn[4] +
          5 * inn[5] +
          9 * inn[6] +
          4 * inn[7] +
          6 * inn[8] +
          8 * inn[9]) %
          11) %
        10;

      checkSumTwo =
        ((3 * inn[0] +
          7 * inn[1] +
          2 * inn[2] +
          4 * inn[3] +
          10 * inn[4] +
          3 * inn[5] +
          5 * inn[6] +
          9 * inn[7] +
          4 * inn[8] +
          6 * inn[9] +
          8 * inn[10]) %
          11) %
        10;

      if (checkSumOne === Number(inn[10]) && checkSumTwo === Number(inn[11])) {
        return true;
      } else if (checkSumOne !== Number(inn[10])) {
        return false;
      } else if (checkSumTwo !== Number(inn[11])) {
        return false;
      }
    }

    return true;
  };

  return (
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
                ИНН компании*
              </label>
              <input
                className={
                  "forminput forminputSearc" +
                  (searchForm.isInnValid ? "" : " error")
                }
                name="inn"
                id="inn"
                type="text"
                placeholder="10 цифр"
                onChange={(event) =>
                  searchForm.setStringValue("companyInn", event.target.value)
                }
              ></input>
              <label className="formLable formInputLableSearc">
                Тональность{" "}
              </label>
              <select
                className="selectTonal"
                id="selectTonal"
                onChange={(event) =>
                  searchForm.setStringValue("tonality", event.target.value)
                }
              >
                <option selected={searchForm.tonality === "any"} value={"any"}>
                  Любая
                </option>
                <option
                  selected={searchForm.tonality === "negative"}
                  value={"negative"}
                >
                  Негативная
                </option>
                <option
                  selected={searchForm.tonality === "positive"}
                  value={"positive"}
                >
                  Позитивная
                </option>
              </select>
              <label className="formLable formInputLableSearc">
                {" "}
                Количество документов в выдаче*
              </label>
              <input
                className={
                  "forminput forminputSearc" +
                  (searchForm.isValidDocumentsCount ? "" : " error")
                }
                name="documentsCount"
                id="documentsCount"
                type="number"
                placeholder="От 1 до 1000"
                onChange={(event) =>
                  searchForm.setStringValue(
                    "numberOfDocuments",
                    event.target.value
                  )
                }
              ></input>
              <div className="formLable formInputLableSearc">
                Диапазон поиска*
              </div>
              <div className="DatePickerWrapper">
                <DatePicker
                  placeholderText="Дата начала"
                  className={
                    "DatePicker" + (searchForm.isDateRangeValid ? "" : " error")
                  }
                  dateFormat="dd/MM/yyyy"
                  selected={searchForm.startDate}
                  onChange={(date) => searchForm.setDate("startDate", date)}
                />
                <DatePicker
                  className={
                    "DatePicker" + (searchForm.isDateRangeValid ? "" : " error")
                  }
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Дата конца"
                  minDate={searchForm.startDate}
                  selected={searchForm.endDate ?? moment()}
                  onChange={(date) => searchForm.setDate("endDate", date)}
                />
              </div>
            </div>

            <div className="formSearcRight">
              <div className="checkSearcWrapper">
                <label className="labelCheckSerch">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={searchForm.maxFullness}
                    onChange={(event) =>
                      searchForm.setCheckBoxValue(
                        "maxFullness",
                        event.target.checked
                      )
                    }
                  ></input>
                  <span className="fake"></span>
                  <span className="checkTitle">
                    Признак максимальной полноты
                  </span>
                </label>
              </div>
              <div className="checkSearcWrapper">
                <label className="labelCheckSerch">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={searchForm.inBusinessNews}
                    onChange={(event) =>
                      searchForm.setCheckBoxValue(
                        "inBusinessNews",
                        event.target.checked
                      )
                    }
                  ></input>
                  <span className="fake"></span>
                  <span className="checkTitle">
                    Упоминания в бизнес-контексте
                  </span>
                </label>
              </div>
              <div className="checkSearcWrapper">
                <label className="labelCheckSerch">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={searchForm.onlyMainRole}
                    onChange={(event) =>
                      searchForm.setCheckBoxValue(
                        "onlyMainRole",
                        event.target.checked
                      )
                    }
                  ></input>
                  <span className="fake"></span>
                  <span className="checkTitle">Главная роль в публикации</span>
                </label>
              </div>
              <div className="checkSearcWrapper">
                <label className="labelCheckSerch">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={searchForm.onlyWithRiskFactors}
                    onChange={(event) =>
                      searchForm.setCheckBoxValue(
                        "onlyWithRiskFactors",
                        event.target.checked
                      )
                    }
                  ></input>
                  <span className="fake"></span>
                  <span className="checkTitle">
                    Публикации только с риск-факторами
                  </span>
                </label>
              </div>
              <div className="checkSearcWrapper">
                <label className="labelCheckSerch">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={!searchForm.excludeTechNews}
                    onChange={(event) =>
                      searchForm.setCheckBoxValue(
                        "excludeTechNews",
                        !event.target.checked
                      )
                    }
                  ></input>
                  <span className="fake"></span>
                  <span className="checkTitle">
                    Включать технические новости рынков
                  </span>
                </label>
              </div>
              <div className="checkSearcWrapper">
                <label className="labelCheckSerch">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={!searchForm.excludeAnnouncements}
                    onChange={(event) =>
                      searchForm.setCheckBoxValue(
                        "excludeAnnouncements",
                        !event.target.checked
                      )
                    }
                  ></input>
                  <span className="fake"></span>
                  <span className="checkTitle">
                    Включать анонсы и календари
                  </span>
                </label>
              </div>
              <div className="checkSearcWrapper">
                <label className="labelCheckSerch">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={!searchForm.excludeDigests}
                    onChange={(event) =>
                      searchForm.setCheckBoxValue(
                        "excludeDigests",
                        !event.target.checked
                      )
                    }
                  ></input>
                  <span className="fake"></span>
                  <span className="checkTitle">Включать сводки новостей</span>
                </label>
              </div>
              <div className="buttonSearcWrapper">
                <button
                  disabled={searchForm.hasError}
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
  );
};

export default observer(SearchNewsByCompanyForm);
