import { BrowserWindow, Menu, nativeTheme } from 'electron';
import { LocalStoreObject } from '../local-storage/local-theme-types';

function createMenu(window: BrowserWindow, localStore: LocalStoreObject): void {
  const menu = Menu.buildFromTemplate([
    {
      label: 'Theme',
      submenu: [
        {
          label: 'System',
          click: () => (nativeTheme.themeSource = 'system')
        },
        {
          label: 'Light',
          click: () => (nativeTheme.themeSource = 'light')
        },
        {
          label: 'Dark',
          click: () => (nativeTheme.themeSource = 'dark')
        }
      ]
    },
    {
      label: 'Language',
      submenu: [
        {
          label: 'System',
          click: (): void => {
            localStore.store.set('lang', 'system');
            window.webContents.send('lang:update', localStore.languageUsed());
          }
        },
        {
          label: 'English',
          click: (): void => {
            localStore.store.set('lang', 'en');
            window.webContents.send('lang:update', localStore.languageUsed());
          }
        },
        {
          label: 'Spanish',
          click: (): void => {
            localStore.store.set('lang', 'es');
            window.webContents.send('lang:update', localStore.languageUsed());
          }
        }
      ]
    }
  ]);

  //Menu.setApplicationMenu(menu);
  window.setMenu(menu);
}

export default createMenu;
