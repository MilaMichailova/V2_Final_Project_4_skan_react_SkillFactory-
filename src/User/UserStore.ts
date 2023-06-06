import { makeAutoObservable, action } from "mobx";
import { UserToken } from "./UserToken";
import { UserLimits } from "./UserLimits";
import axios from "axios";
import moment from "moment";

const apiUrl = "https://gateway.scan-interfax.ru";

class UserStore {
  constructor() {
    makeAutoObservable(this, {
      updateUserLimits: action.bound,
      setUserToken: action.bound,
    });
    const storageUser = localStorage.getItem("user");
    this.userToken = JSON.parse(storageUser ?? "{}");
    this.updateUserLimits();
  }

  private userToken = {} as UserToken;
  private userLimits = {} as UserLimits;

  get isUserLoggedIn(): boolean {
    if (!Object.keys(this.userToken).length) return false;

    const isTokenValid = moment().diff(moment(this.userToken.expire)) < 0;

    if (!isTokenValid) {
      this.logOut();
    }
    return isTokenValid;
  }

  get currentToken(): UserToken {
    return this.userToken;
  }

  get currentLimits(): UserLimits {
    return this.userLimits;
  }

  setUserToken(newUserToken: UserToken): void {
    this.userToken = newUserToken;
    localStorage.setItem("user", JSON.stringify(this.userToken));

    this.updateUserLimits();
  }

  updateUserLimits(): void {
    if (!this.isUserLoggedIn) {
      return;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${this?.currentToken?.accessToken}`,
      },
    };

    axios
      .get(`${apiUrl}/api/v1/account/info`, config)
      .then((response) => {
        this.userLimits = {
          eventFiltersInfo: {
            usedCompanyCount: response.data.eventFiltersInfo.usedCompanyCount,
            companyLimit: response.data.eventFiltersInfo.companyLimit,
          },
        };
      })
      .catch((error) => {
        console.log(error);
      });
  }

  logOut(): void {
    localStorage.removeItem("user");
    this.userToken = {} as UserToken;
    window.location.replace("/login");
  }
}

export default UserStore;
