import { observer } from "mobx-react-lite";
import logo from "../asets/images/logo.svg";

const Navigation = () => {
  return (
    <div className="NavigationWrapper">
      <div>
        <img src={logo} alt="logo"></img>
      </div>
      <div className="menuWrapper">
        <ul className="menuList">
          <li className="menuItem">
            <a href="/" className="menuItemHref">
              Главная
            </a>
          </li>
          <li className="menuItem">
            <a href="./#rates" className="menuItemHref">
              Тарифы
            </a>
          </li>
          <li className="menuItem">
            <a href="#FAQ" className="menuItemHref">
              FAQ
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default observer(Navigation);
