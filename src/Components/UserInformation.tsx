import { observer } from "mobx-react-lite";
import userCompanyDataLoader from "../asets/images/UserCompanyDataLoader.svg";
import userAvatar from "../asets/images/userAvatar.svg";
import { useStore } from "../Store";

const UserInformation = () => {
  const { userStore } = useStore();

  const userLogOut = () => {
    userStore.logOut();
  };

  return (
    <div className="userDocumentsDataWrapper">
      <div className="userCompanyDataWrapper">
        <div className="userCompanyData">
          Использовано компаний
          <div className="userCompanyDataCount">
            {userStore.currentLimits?.eventFiltersInfo?.usedCompanyCount || 0}
          </div>
        </div>
        <div className="userCompanyLimit">
          Лимит по компаниям
          <div className="userCompanyLimitCount">
            {userStore.currentLimits?.eventFiltersInfo?.companyLimit || 0}
          </div>
        </div>
      </div>

      <div className="userCompanyDataLoading">
        {/* как сделать обновляшку? ну что бы она работала а не закоментированна была */}
        {/* как запретить переход на страницы кроме главной неавторизованному юзеру?  */}
        {/*как в логине   В случае неуспешного запроса показать сообщение неверный логин или пароль */}
        {/* как сделать что бы тариф не выделялся бейджем, и вообще никак пока не залогинен */}
        {/* сюда же, кнопка запросить на главной, не видна пока не залогинен */}
        {/* нужно сделать какую то 1 заглушку на страницы вне тз, "эта страница еще в разработке, вернитель на главную" и кнопка "главная" */}
        {/* так и не сделала активный/пассивный чекбокс хз как правлино его делать в форме поиска, и там же еще формирование запроса поидее делается если я все правильно понимаю*/}
        {/* <img
          className="userCompanyDataLoader"
          src={userCompanyDataLoader}
          alt="loading data"
        ></img> */}
      </div>
      <div className="userAccountWrapper">
        <div className="userAccountTextWrapper">
          {/* не пойму где именно писать запросы аксиоса и вот это все... для обновления данных юзера.. я вообще с этими методами туплю.. и кажись это не методы называется =( нужно прописать эти типы запросов в файл, а потом куда то выносить...? ну и отправлять через аксиос  ) */}
          {/* нужно составить план-график работ на то что делать... что бы было четкое понимание у меня. ПОЖАЛУЙСТААА */}
          <div className="userName">Алексей А. </div>
          <button onClick={userLogOut} className="userAccountLogout">
            Выйти
          </button>
        </div>
        <img className="userAvatar" src={userAvatar} alt="user avatar"></img>
      </div>
    </div>
  );
};

export default observer(UserInformation);
