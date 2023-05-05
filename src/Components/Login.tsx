import { observer } from "mobx-react-lite";
import Header from "./Header";
import AuthenticationForm from "./AuthenticationForm";
import Footer from "./Footer";

const Login = () => {
  return (
    <div>
      <Header></Header>
      <AuthenticationForm></AuthenticationForm>
      <Footer></Footer>
    </div>
  );
};

export default observer(Login);
