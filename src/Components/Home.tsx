import { useStore } from "../Store";
import { observer } from "mobx-react-lite";
import Header from "./Header";
import SearchNewsByCompanyCta from "./SearchNewsByCompanyCta";
import AboutUs from "./AboutUs";
import Rates from "./Rates";
import Footer from "./Footer";

const Home = () => {
  // const { userStore } = useStore();

  return (
    <div>
      <Header></Header>
      <SearchNewsByCompanyCta></SearchNewsByCompanyCta>
      <AboutUs></AboutUs>
      <Rates></Rates>
      <Footer></Footer>
      {/* <div>Пользователь: {userStore.currentUser.userName}</div> */}
    </div>
  );
};

export default observer(Home);
