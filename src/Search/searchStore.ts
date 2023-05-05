import { makeAutoObservable } from "mobx";
// import { SearchParams } from "./SearchParams";

// let searchParams = {} as SearchParams;

class SearchStore {
  constructor() {
    makeAutoObservable(this);
  }
}

export default SearchStore;
