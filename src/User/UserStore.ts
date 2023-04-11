import { makeAutoObservable } from "mobx";
import { User } from "./User";

class UserStore {
  private userInfo = {} as User;

  get isUserLoggedIn() {
    return !!this.userInfo;
  }

  get currentUser() {
    return this.userInfo;
  }

  setUserInfo(userInfo: User) {
    localStorage.setItem("user", JSON.stringify(userInfo));
    this.userInfo = userInfo;
  }

  constructor() {
    makeAutoObservable(this);
    const storageUser = localStorage.getItem("user");
    this.userInfo = JSON.parse(storageUser ?? "{}");

    console.log("ctor");
  }
}

export default UserStore;
