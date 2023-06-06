import { observer } from "mobx-react-lite";
import Header from "./Header";
import Footer from "./Footer";
import LoadingDataCompany from "./LoadingDataCompany";
import ReceivedDataCompany from "./ReceivedDataCompany";
import { useStore } from "../Store";

const SearchResult = () => {
  const { searchStore } = useStore();

  return (
    <div>
      <Header></Header>
      <LoadingDataCompany></LoadingDataCompany>
      <ReceivedDataCompany></ReceivedDataCompany>
      <Footer></Footer>
    </div>
  );
};

export default observer(SearchResult);
