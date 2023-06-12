import { action, makeAutoObservable } from "mobx";

class MobileMenuStore {
  private _isMenuOpen = false;

  public get isMenuOpen(): boolean {
    return this._isMenuOpen;
  }

  toggleMenu(): void {
    this._isMenuOpen = !this._isMenuOpen;
  }

  constructor() {
    makeAutoObservable(this, {
      toggleMenu: action.bound,
    });
  }
}

export default MobileMenuStore;
