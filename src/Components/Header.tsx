import { observer } from "mobx-react-lite";
import Navigation from "./Navigation";
import LoginBlock from "./LoginBlock";
import UserInformation from "./UserInformation";
import { useStore } from "../Store";
import MobileMenu from "./MobileMenu";

const AuthenticationInfo = observer(() => {
  const { userStore } = useStore();

  if (userStore.isUserLoggedIn) {
    return <UserInformation></UserInformation>;
  } else {
    return <LoginBlock></LoginBlock>;
  }
});

const Header = () => {
  const { mobileMenuStore } = useStore();
  return (
    <div>
      <header className="headerWrapper">
        <Navigation></Navigation>
        <AuthenticationInfo />
        <button
          className="mobileMenu"
          onClick={mobileMenuStore.toggleMenu}
        ></button>
      </header>
      <MobileMenu></MobileMenu>
    </div>
  );
};

export default observer(Header);
