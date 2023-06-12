import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { useStore } from "../Store";

const MobileMenu = () => {
  const { mobileMenuStore } = useStore();
  const navigate = useNavigate();

  return mobileMenuStore.isMenuOpen ? (
    <div className="mobile menuMobileWrapper">
      <div className="ElementmenuMobile ">
        <a href="/" className="menuItemHrefMobile">
          Главная
        </a>
      </div>

      <div className="ElementmenuMobile">
        <a href="./#rates" className="menuItemHrefMobile">
          Тарифы
        </a>
      </div>
      <div className="ElementmenuMobile">
        <a href="#FAQ" className="menuItemHrefMobile">
          FAQ
        </a>
      </div>

      <div className="ElementmenuMobile">
        <a href=" " className="menuItemHrefMobile menuItemHrefMobileLogin">
          Зарегистрироваться
        </a>
      </div>

      <div className="buttonmenuMobile">
        <button
          onClick={() => navigate("/login")}
          className=" loginButtonMobile"
        >
          Войти
        </button>
      </div>
    </div>
  ) : null;
};

export default observer(MobileMenu);
