const { Menu, BrowserWindow } = require('electron');

function createMenu(window: typeof BrowserWindow): void {
  const menu = Menu.buildfromTemplate([
    {
      label: 'Theme',
      submenu: [
        {
          label: 'system',
          click: () => window.webContents.send('set-theme', 'system')
        },
        {
          label: 'light',
          click: () => window.webContents.send('set-theme', 'light')
        },
        {
          label: 'dark',
          click: () => window.webContents.send('set-theme', 'dark')
        }
      ]
    }
  ]);

  Menu.setApplicationMenu(menu);
}

export default createMenu;
