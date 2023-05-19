import { nativeTheme } from 'electron';
import { LocalStore } from '../local-theme-types';
import Store from 'electron-store';
import { StoreThemes, Theme } from './themes-types';

function storeThemes(store: Store<LocalStore>): StoreThemes {
  //--------------- Set from Value ------------------

  function setThemeFromStoreValue(): void {
    nativeTheme.themeSource = store.get('theme');
  }

  //---------------- Theme Used ---------------------
  //-------------------------------------------------

  function themeUsed(): Theme {
    return nativeTheme.shouldUseDarkColors ? 'dark' : 'light';
  }

  //-------------------------------------------------

  return {
    setThemeFromStoreValue,
    themeUsed
  };
}

export default storeThemes;
