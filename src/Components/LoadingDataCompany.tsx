import { observer } from "mobx-react-lite";
import SummaryDataCompany from "./SummaryDataCompany";
import SearchResultDataCompany from "../asets/images/searchResultDataCompany.svg";

const LoadingDataCompany = () => {
  // const { userStore } = useStore();

  return (
    <div>
      <div className="LoadingDataCompanyWrapperHorizontal">
        <div className="leftPartDataCompany">
          <h1 className="primaryTitle">Ищем. Скоро будут результаты</h1>
          <div className="subtitleMain subtitleDataCompany">
            Поиск может занять некоторое время, просим сохранять терпение.
          </div>
        </div>
        <div className="rightPartDataCompany">
          <img src={SearchResultDataCompany} alt="Search Result Data Company" />
        </div>
      </div>

      <SummaryDataCompany></SummaryDataCompany>
    </div>
  );
};

export default observer(LoadingDataCompany);
