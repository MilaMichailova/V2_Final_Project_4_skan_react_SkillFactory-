import { observer } from "mobx-react-lite";
import SummaryDataCompany from "./SummaryDataCompany";
import SearchResultDataCompany from "../asets/images/searchResultDataCompany.svg";
import { useStore } from "../Store";

const LoadingDataCompany = () => {
  const { searchStore } = useStore();

  return (
    <div>
      {searchStore.isArticlesLoading ? (
        <div className="LoadingDataCompanyWrapperHorizontal">
          <div className="leftPartDataCompany">
            <h1 className="primaryTitle mobileTitle">
              Ищем. Скоро будут результаты
            </h1>
            <div className="subtitleMain subtitleDataCompany">
              Поиск может занять некоторое время, просим сохранять терпение.
            </div>
          </div>
          <div className="rightPartDataCompany">
            <img
              src={SearchResultDataCompany}
              alt="Search Result Data Company"
              className="SearchResultDataCompanyImg"
            />
          </div>
        </div>
      ) : null}

      <SummaryDataCompany></SummaryDataCompany>
    </div>
  );
};

export default observer(LoadingDataCompany);
