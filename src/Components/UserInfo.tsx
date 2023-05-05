import { observer } from "mobx-react-lite";
import userCompanyDataLoader from "../asets/images/UserCompanyDataLoader.svg";
import userAvatar from "../asets/images/userAvatar.svg";

const UserInfo = () => {
  return (
    <div>
      <div className="userDocumentsDataWrapper">
        <div className="userCompanyDataWrapper">
          <div className="userCompanyData">
            Использовано компаний
            <div className="userCompanyDataCount"> 34 </div>
          </div>
          <div className="userCompanyLimit">
            Лимит по компаниям
            <div className="userCompanyLimitCount">100</div>
          </div>
        </div>

        <div className="userCompanyDataLoading">
          <img
            className="userCompanyDataLoader"
            src={userCompanyDataLoader}
            alt="loading data"
          ></img>
        </div>
        <div className="userAccountWrapper">
          <div className="userName">Алексей А. </div>{" "}
          <img className="userAvatar" src={userAvatar} alt="user avatar"></img>
          <button className="userAccountLogout">Выйти</button>
        </div>
      </div>
    </div>
  );
};

export default observer(UserInfo);
