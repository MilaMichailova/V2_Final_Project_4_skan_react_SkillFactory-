import { createContext, useContext } from "react";
import UserStore from "./User/UserStore";

const stores = {
  userStore: new UserStore(),
};

export const StoreContext = createContext(stores);

export const useStore = () => {
  return useContext<typeof stores>(StoreContext);
};

export default stores;
