import { useStore } from "../Store";
import { action } from "mobx";
import { FormEvent } from "react";
import { observer, useLocalObservable } from "mobx-react-lite";
import axios from "axios";
import { User } from "../User/User";
import { useNavigate } from "react-router-dom";

const AuthenticationForm = () => {
  const { userStore } = useStore();
  const navigate = useNavigate();

  const loginForm = useLocalObservable(() => ({
    phone: "",
    password: "",
    setValue(key: "phone" | "password", value: string) {
      loginForm[key] = value.trim(); // loginForm.phone = value;
    },
    get hasError() {
      return !this.phone.trim() || !this.password.trim();
    },
  }));

  const authenticateUser = action((e: FormEvent) => {
    e.preventDefault();

    const loginUserInfo = {
      phone: loginForm.phone,
      password: loginForm.password,
    };

    axios
      .post("https://api.example.com/", loginUserInfo)
      .then(function (response) {
        console.log(response);
        //   userStore.setUserInfo({ userName: loginForm.phone } as User);
        //   navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  // const authenticateUser = action((e: FormEvent) => {
  //   e.preventDefault();

  // });

  return (
    // <div className="AuthenticationForm">
    //   <div>Пользователь: {userStore.currentUser.userName}</div>
    //   <form onSubmit={authenticateUser}>
    //     <input
    //       className="input"
    //       type="text"
    //       onChange={(event) => loginForm.setValue("phone", event.target.value)}
    //     />
    //     <input
    //       type="text"
    //       onChange={(event) =>
    //         loginForm.setValue("password", event.target.value)
    //       }
    //     />
    //     <button type="submit" disabled={loginForm.hasError}>
    //       Регистрация
    //     </button>
    //   </form>
    // </div>

    <div>
      <form className="loginForm">
        <div className="loginFormWrapper">
          <div className="buttonsBlockWrapper">
            <button className="primaryButton lightButton formLightButtonLogin">
              Войти
            </button>
            <button className="primaryButton lightButton formLightButtonRegist">
              Зарегистрироваться
            </button>
          </div>
          <label className="formLable">
            {" "}
            Логин или номер телефона:
            <input
              onChange={(event) =>
                loginForm.setValue("phone", event.target.value)
              }
              className="forminput"
              name="login"
              id="login"
              type="text"
            ></input>
          </label>
          <label className="formLable">
            {" "}
            Пароль:
            <input
              className="forminput"
              name="password"
              id="password"
              type="text"
            ></input>
          </label>
          <button className="primaryButton secondsryButton">Войти</button>
          <button className="blueButton primaryButton lightButton ">
            Восстановить пароль
          </button>
          <div className="loginAddwrapper">
            <div className="loginAddTitle">Войти через:</div>
            <div className="loginAddButtonsWrapper">
              <button className="imgButton">
                {" "}
                <img
                  src="/images/login-with-google.svg"
                  alt="login with google"
                >
                  {" "}
                </img>{" "}
              </button>
              <button className="imgButton">
                {" "}
                <img
                  src="/images/login-with-facebook.svg"
                  alt="login with facebook"
                ></img>
              </button>
              <button className="imgButton">
                <img
                  src="/images/login-with-yandex.svg"
                  alt="login with yandex"
                ></img>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default observer(AuthenticationForm);
