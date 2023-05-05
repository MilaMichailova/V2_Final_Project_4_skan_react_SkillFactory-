import { observer } from "mobx-react-lite";
import verticalLine from "../asets/images/vertikal-line.svg";
import { useNavigate } from "react-router-dom";

const LoginBlock = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="authorizationButtonBlock">
        <button className=" primaryButton lightButton ">
          Зарегистрироваться
        </button>
        <div>
          <img src={verticalLine} alt="vertical line"></img>
        </div>
        <button
          onClick={() => navigate("/login")}
          className="primaryButton loginButton"
        >
          Войти
        </button>
      </div>
    </div>
  );
};

export default observer(LoginBlock);
