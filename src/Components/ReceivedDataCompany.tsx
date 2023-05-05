import { observer } from "mobx-react-lite";
import DocumentItemDataCompany from "./DocumentItemDataCompany";

const ReceivedDataCompany = () => {
  // const { userStore } = useStore();

  return (
    <div>
      <div className="ReceivedDataCompanyTitle primaryTitle ">
        Список докумнтов
      </div>
      <div className="DocumentItemsWrapper">
        <DocumentItemDataCompany></DocumentItemDataCompany>
        <DocumentItemDataCompany></DocumentItemDataCompany>
      </div>
      <button className="buttonShowMore">Показать больше</button>
    </div>
  );
};

export default observer(ReceivedDataCompany);
