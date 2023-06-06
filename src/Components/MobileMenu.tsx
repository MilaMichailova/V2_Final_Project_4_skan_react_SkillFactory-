import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const MobileMenu = () => {
  const navigate = useNavigate();

  return (
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
  );
};

export default observer(MobileMenu);
