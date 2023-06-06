import { createContext, useContext } from "react";
import UserStore from "./User/UserStore";
import SearchStore from "./Search/SearchStore";

const userStore = new UserStore();

const stores = {
  userStore: userStore,
  searchStore: new SearchStore(userStore),
};

export const StoreContext = createContext(stores);

export const useStore = () => {
  return useContext<typeof stores>(StoreContext);
};

export default stores;
