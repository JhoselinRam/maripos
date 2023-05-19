import { Menu, nativeTheme } from 'electron';

function createMenu(): void {
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
    }
  ]);
  Menu.setApplicationMenu(menu);
}

export default createMenu;
