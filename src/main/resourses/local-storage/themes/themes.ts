import { BrowserWindow, nativeTheme } from 'electron';
import { LocalStore } from '../local-theme-types';
import Store from 'electron-store';
import { StoreThemes, Theme } from './themes-types';

function storeThemes(store: Store<LocalStore>, window: BrowserWindow): StoreThemes {
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
  //---------------- On Updated ---------------------

  nativeTheme.on('updated', () => {
    window.webContents.send('theme:update', nativeTheme.shouldUseDarkColors ? 'dark' : 'light');
    store.set('theme', nativeTheme.themeSource);
  });

  //-------------------------------------------------

  return {
    setThemeFromStoreValue,
    themeUsed
  };
}

export default storeThemes;
