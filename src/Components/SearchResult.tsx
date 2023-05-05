import { observer } from "mobx-react-lite";
import Header from "./Header";
import Footer from "./Footer";
import LoadingDataCompany from "./LoadingDataCompany";
import ReceivedDataCompany from "./ReceivedDataCompany";

const SearchResult = () => {
  // const { userStore } = useStore();

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
