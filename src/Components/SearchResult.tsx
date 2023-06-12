import { observer } from "mobx-react-lite";
import Header from "./Header";
import Footer from "./Footer";
import LoadingDataCompany from "./LoadingDataCompany";
import ReceivedDataCompany from "./ReceivedDataCompany";
import { useStore } from "../Store";
import { useNavigate } from "react-router-dom";

const SearchResult = () => {
  const navigate = useNavigate();
  const { userStore } = useStore();

  if (!userStore.isUserLoggedIn) {
    navigate("/login");
  }

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
