import { observer } from "mobx-react-lite";
import Header from "./Header";
import Footer from "./Footer";
import SearchNewsByCompanyForm from "./SearchNewsByCompanyForm";

const Searc = () => {
  return (
    <div>
      <Header></Header>
      <SearchNewsByCompanyForm></SearchNewsByCompanyForm>
      <Footer></Footer>
    </div>
  );
};

export default observer(Searc);
