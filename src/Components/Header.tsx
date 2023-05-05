import { observer } from "mobx-react-lite";
import Navigation from "./Navigation";
import LoginBlock from "./LoginBlock";
import UserInfo from "./UserInfo";
import { useStore } from "../Store";

const AuthenticationInfo = observer(() => {
  const { userStore } = useStore();

  if (userStore.isUserLoggedIn) {
    return <UserInfo></UserInfo>;
  } else {
    return <LoginBlock></LoginBlock>;
  }
});

const Header = () => {
  return (
    <div>
      <header className="headerWrapper">
        <Navigation></Navigation>
        <AuthenticationInfo />
      </header>
    </div>
  );
};

export default observer(Header);
