import { observer } from "mobx-react-lite";
import DocumentItemDataCompany from "./DocumentItemDataCompany";
import { useStore } from "../Store";

const ReceivedDataCompany = () => {
  const { searchStore } = useStore();

  return (
    <div>
      <div className="ReceivedDataCompanyTitle primaryTitle ">
        Список документов
      </div>
      <div className="DocumentItemsWrapper">
        {searchStore.documents.map((document) => (
          <DocumentItemDataCompany {...document.ok}></DocumentItemDataCompany>
        ))}
      </div>
      <button className="buttonShowMore">Показать больше</button>
    </div>
  );
};

export default observer(ReceivedDataCompany);
