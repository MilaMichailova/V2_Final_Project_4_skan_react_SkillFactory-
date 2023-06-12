import { createContext, useContext } from "react";
import UserStore from "./User/UserStore";
import SearchStore from "./Search/searchStore";
import MobileMenuStore from "./MobileMenu/MobileMenuStore";

const userStore = new UserStore();

const stores = {
  userStore: userStore,
  searchStore: new SearchStore(userStore),
  mobileMenuStore: new MobileMenuStore(),
};

export const StoreContext = createContext(stores);

export const useStore = () => {
  return useContext<typeof stores>(StoreContext);
};

export default stores;
