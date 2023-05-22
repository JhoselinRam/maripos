import { contextBridge, ipcRenderer } from 'electron';
import { electronAPI } from '@electron-toolkit/preload';
import { PreloadApi, UpdateLanguageCallback, UpdateThemeCallback } from './index-types';

// Custom APIs for renderer
const api: PreloadApi = {
  theme: {
    initialTheme: () => ipcRenderer.invoke('theme:init'),
    update: (callback: UpdateThemeCallback) => ipcRenderer.on('theme:update', callback)
  },
  language: {
    initialLanguage: () => ipcRenderer.invoke('lang:init'),
    update: (callback: UpdateLanguageCallback) => ipcRenderer.on('lang:update', callback)
  }
};

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI);
    contextBridge.exposeInMainWorld('api', api);
  } catch (error) {
    console.error(error);
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI;
  // @ts-ignore (define in dts)
  window.api = api;
}
