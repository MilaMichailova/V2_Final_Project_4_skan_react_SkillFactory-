// import { makeAutoObservable } from "mobx";
// import { User } from "./User";

// let userInfo = {} as User;

// class UserStore {
//   get isUserLoggedIn() {
//     console.log("userInfo", Object.keys(userInfo) );
//     return !!Object.keys(userInfo).length;
//   }

//   get currentUser() {
//     return userInfo;
//   }

//   setUserInfo(newUserInfo: User) {
//     localStorage.setItem("user", JSON.stringify(userInfo));
//     userInfo = newUserInfo;
//   }

//   constructor() {
//     makeAutoObservable(this);
//     const storageUser = localStorage.getItem("user");
//     userInfo = JSON.parse(storageUser ?? "{}");
//   }
// }

// export default UserStore;

import { makeAutoObservable } from "mobx";
import { UserToken } from "./UserToken";

let userToken = {} as UserToken;

class UserStore {
  get isUserLoggedIn() {
    console.log("userToken", Object.keys(userToken));
    return !!Object.keys(userToken).length;
  }

  get currentUser() {
    return userToken;
  }

  setUserToken(newUserToken: UserToken) {
    localStorage.setItem("user", JSON.stringify(userToken));
    userToken = newUserToken;
  }

  constructor() {
    makeAutoObservable(this);
    const storageUser = localStorage.getItem("user");
    userToken = JSON.parse(storageUser ?? "{}");
  }
}

export default UserStore;
