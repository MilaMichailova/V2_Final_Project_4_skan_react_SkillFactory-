import { observer } from "mobx-react-lite";
import Navigation from "./Navigation";
import LoginBlock from "./LoginBlock";
import UserInformation from "./UserInformation";
import { useStore } from "../Store";

const AuthenticationInfo = observer(() => {
  const { userStore } = useStore();

  if (userStore.isUserLoggedIn) {
    return <UserInformation></UserInformation>;
  } else {
    return <LoginBlock></LoginBlock>;
  }
});

const Header = () => {
  return (
    <header className="headerWrapper">
      <Navigation></Navigation>
      <AuthenticationInfo />
    </header>
  );
};

export default observer(Header);
